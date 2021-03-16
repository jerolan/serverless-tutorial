"use strict";

const sayHello = require("./hello");

module.exports.lambdaHandler = (event) => {
  const greeting = sayHello("Jerome");

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: greeting,
        input: event,
      },
      null,
      2
    ),
  };
};
