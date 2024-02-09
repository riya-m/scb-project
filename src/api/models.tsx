export type SaveInterfaceRequest = {
    name: string;
    ram: string;
    cpu: string;
};

export type InterfaceReponse = {
    id: number;
    name: string;
    CPU: string;
    RAM: string;
};