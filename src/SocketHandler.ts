import net from "net";
import {Encryption} from "./Encryption";
import * as config from './config.json';

export class SocketHandler {

    public writeToSocket(payload:string, callback:delegate = null){
        const client = new net.Socket().connect(config.port, config.address, () => {
            client.write(new Encryption().encrypt(payload), 'ascii');
            client.end();
            client.on('error', () => {console.error("asdsad")});
            client.on('data', () => {
                callback();
            });
        });
    }

}