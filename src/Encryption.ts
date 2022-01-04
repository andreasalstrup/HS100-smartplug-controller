export class Encryption {

    // https://www.softscheck.com/en/reverse-engineering-tp-link-hs110/ - 6. TP-Link Smart Home Protocol
    public encrypt(str: string){
        let key = 171;
        let result = "\0\0\0\0";
        for (let i = 0, len = str.length; i < len; i++) {
            const a = key ^ str.charAt(i).charCodeAt(0);
            key = a;
            result += String.fromCharCode(a);
        }
        return result;
    }

    public decrypt(str: string){
        let key = 43;
        let result = "";
        for (let i = 0, len = str.length; i < len; i++) {
            const a = key ^ str.charAt(i).charCodeAt(0);
            key = str.charAt(i).charCodeAt(0);
            result += String.fromCharCode(a);
        }
        return result;
    }

    // makes incoming messages readable for further use
    public toReadable(data:any) {
         return JSON.parse(this.decrypt(data.toString('ascii',4)));
    }
}