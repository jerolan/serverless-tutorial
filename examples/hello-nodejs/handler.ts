import sayHello from "./say-hello";

export default function lambda(event) {
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
}
