export const API_KEY = "AIzaSyCiZt7AR_30DmL8xw6-LxFJ1EsAPijiKrQ";

export const value_converter = (value)=>{
    if (value>=100000) {
        return Math.floor(value/100000) + "M"
    }
    else if (value>=1000) {
        return Math.floor(value/1000) + "K"
    }
    else{
        return value;
    }
}