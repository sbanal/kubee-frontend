export interface HelloResponse {
    message: string;
}

export const getMessage = async (name: string): Promise<HelloResponse> => {
    // @ts-ignore
    return fetch(process.env.REACT_APP_BACKEND_HELLO_API, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name})
    }).then(response => {
        return response.json()
    });
};
