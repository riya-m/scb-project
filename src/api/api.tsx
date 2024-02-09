import { InterfaceReponse } from "./models";
import { SaveInterfaceRequest } from "./models";

export const fetchData = async (): Promise<InterfaceReponse[]> => {
    try {
        const response = await fetch('/interface');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData: InterfaceReponse[] = await response.json(); 
        return responseData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const saveInterface = async (data: SaveInterfaceRequest): Promise<void> => {
    try {
        const response = await fetch('/save-interface', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error saving interface:', error);
        throw error;
    }
};

export const deleteInterface = async (id: number): Promise<void> => {
    try {
        const response = await fetch('/delete/${id}', {
        method: 'DELETE',
    });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error deleting item:', error);
        throw error;
    }
};