const { StatusCodes } = require("http-status-codes");
const axios = require("axios");


const apiSecret = 'OWY1ZWNjZGNkMTViYTJhOTJlNjU5ZDAyYzNkYzJhMjgyNWI4YjcxZDgxZjIzYjdjZDY';


const apiKey = '45a21a33-c87f-4b71-99a2-9df2d58eeb0e';

const { generateSign,generateQuery } = require("../helpers/createSignature");

// #1 Registration
exports.registration = async (req, res, next) => {
  const request = req.body;
  // const { client_api, login_id, first_name, last_name, mobile, email } =
  //   req.body;
  request['signature'] = generateSign(request, apiSecret);
  request['apiKey'] = apiKey;
  var url = "https://stage-widget.nearpay.co/?"+generateQuery(request, apiKey);
  res.status(StatusCodes.OK).json({
    data: {
      message: "create signature successfully",
      sig: url,
    },
  });
};
