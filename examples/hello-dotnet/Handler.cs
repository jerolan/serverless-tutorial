using Amazon.Lambda.Core;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]
namespace AwsDotnetCsharp
{
  public class Handler
  {
    public Response Hello()
    {
      return new Response("Go Serverless v1.0! Your function executed successfully!");
    }
  }

  public class Response
  {
    public string Message { get; set; }

    public Response(string message)
    {
      Message = message;
    }
  }
}
