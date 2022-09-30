const baseUrl = process.env.REACT_APP_API_URL;

const fetchHelper = ( data, method = 'GET' ) => {

    // const url = `${ baseUrl }?limit=10&offset=0`;
    const url = `${ baseUrl }${ data }`;
    
    // console.log( url );

    if( method === 'GET' ){
        return fetch( url );
    }else{
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify( data )
        });
    }

}

export {
    fetchHelper
}