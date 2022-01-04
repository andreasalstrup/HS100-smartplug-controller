import readline from "readline";
import {SocketHandler} from "./SocketHandler";
import * as config from './config.json';

export class HS100CLI implements ISmartPlugUI{

    private rl = readline.createInterface(process.stdin, process.stdout);

    private dict: {[action:string]: [{[payload: string]:string}, {[callback: string]:delegate}]} = {
        on: [{payload: '{"system":{"set_relay_state":{"state":1}}}'}, {callback: () => {console.log("Status: Device on!")}}],
        off: [{payload: '{"system":{"set_relay_state":{"state":0}}}'}, {callback: () => {console.log("Status: Device off!")}}],
        info: [{payload: '{"system":{"get_sysinfo":null}}'}, {callback: () => {console.log("Status: Device info!")}}]
    }

    public displayActions() {
        console.log(`Device running on '${config.address}:${config.port}' options:`);
        Object.keys(this.dict).forEach(key => {
            console.log(`'${key}'`);
        });
    }

    public choosePayload(){
        console.clear();
        this.displayActions();
        this.rl.question('Type an action - ', (action) => {
            const payload:string = this.dict[`${action}`][0]?.payload;
            const callback:delegate = this.dict[action][1]?.callback;
            if (payload === undefined)
                this.choosePayload();
            new SocketHandler().writeToSocket(payload, callback);
            this.choosePayload();
        })
    }
}