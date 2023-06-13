const crypto = require('crypto');

// you can issue apiSecret and apiKey at https://stage-dashboard.nearpay.co for sandbox
// and at https://dashboard.nearpay.co for prod

function convertToString(rec) {
    return Object.keys(rec)
        .sort((a, b) => {
            return a < b ? -1 : a > b ? 1 : 0;
        })
        .map((key) => {
            if (typeof rec[key] == "object" && rec[key] != null) {
                return key + ':' + convertToString(rec[key]).join("");
            } else {
                return key + ':' + rec[key];
            }
        })
}

exports.generateSign = (rec, secret) => {

    let forSign = convertToString(rec);

    return crypto
        .createHmac("sha256", secret)
        .setEncoding("hex")
        .update(forSign.join(""))
        .digest("hex");
};

exports.generateQuery = (rec, apiKey) =>{
	let query = "";
        Object.keys(rec).map((key) => {
		if (typeof rec[key] == "object" && rec[key] != null) {
                	return query += key + '=' + encodeURIComponent(JSON.stringify(request['contractCall'])) + '&';
            	} else {
                	return query += key + '=' + rec[key] + '&';
            	}
	});
	return query;
}
