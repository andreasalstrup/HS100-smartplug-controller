declare module 'config.json' {
    export const address: string;
    export const port: number;
}

declare type delegate = (input:void) => void;

declare interface ISmartPlugUI {
    displayActions(): void;
    choosePayload(): void;
}
