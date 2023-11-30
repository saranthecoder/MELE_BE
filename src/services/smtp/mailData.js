const { accessData } = require("./mailSender");
let mydata = [
    {
        "WB-101": [
            {
                "roll": "21691A05K0",
                "seatNo": 1,
                "year": 1,
                "department": "CSE",
                "subCode": "21CSE301",
                "examDate": "2023-11-30",
                "examTime": "From 12:06 AM to 11:05 AM"
            },
            {
                "roll": "21691A05M9",
                "seatNo": 2,
                "year": 1,
                "department": "CSE",
                "subCode": "21CSE301",
                "examDate": "2023-11-30",
                "examTime": "From 12:06 AM to 11:05 AM"
            }
        ],
        // "WB-103": [
        //     {
        //         "roll": "23691A052",
        //         "seatNo": 1,
        //         "year": 1,
        //         "department": "CSE",
        //         "subCode": "21CSE301",
        //         "examDate": "2023-11-30",
        //         "examTime": "From 12:06 AM to 11:05 AM"
        //     },
        //     {
        //         "roll": "23691A052",
        //         "seatNo": 2,
        //         "year": 1,
        //         "department": "CSE",
        //         "subCode": "21CSE301",
        //         "examDate": "2023-11-30",
        //         "examTime": "From 12:06 AM to 11:05 AM"
        //     }]
    }
    // {
    //     "WB-101": [
    //         {
    //             "roll": "22691A050",
    //             "seatNo": 1,
    //             "year": 2,
    //             "department": "CSE",
    //             "subCode": "21CSE302",
    //             "examDate": "2023-11-30",
    //             "examTime": "From 12:06 AM to 11:05 AM"
    //         },
    //         {
    //             "roll": "22691A050",
    //             "seatNo": 2,
    //             "year": 2,
    //             "department": "CSE",
    //             "subCode": "21CSE302",
    //             "examDate": "2023-11-30",
    //             "examTime": "From 12:06 AM to 11:05 AM"
    //         }],

    //     "WB-103": [
    //         {
    //             "roll": "22691A052",
    //             "seatNo": 1,
    //             "year": 2,
    //             "department": "CSE",
    //             "subCode": "21CSE302",
    //             "examDate": "2023-11-30",
    //             "examTime": "From 12:06 AM to 11:05 AM"
    //         },
    //         {
    //             "roll": "22691A052",
    //             "seatNo": 2,
    //             "year": 2,
    //             "department": "CSE",
    //             "subCode": "21CSE302",
    //             "examDate": "2023-11-30",
    //             "examTime": "From 12:06 AM to 11:05 AM"
    //         }]
    // }

]

const mailData = async () => {
    try {
        accessData(mydata);
    } catch (err) {
        throw err;
    }
}

module.exports = { mailData };
