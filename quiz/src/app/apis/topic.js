import axios from "axios";

const topic = (topicNumber) => {

    const instance = axios.create();

    return instance.get(`https://opentdb.com/api.php?amount=10&category=${topicNumber}&difficulty=easy&type=multiple`)
        .then((xhrResponse) => {
            return xhrResponse;
        })
        .catch((error) => {
            return error
        });
};


export default topic