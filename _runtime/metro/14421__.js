// === Module 14421: ? ===

// Module 14421
arg5.default = () => (arg0) => {
  closure_0 = arg0;
  const features = {
    apiResponse(request, response, tmp5Result) {
      let status = response;
      if (response) {
        status = response.status;
      }
      if (status) {
        status = typeof response.status === "number";
      }
      if (status) {
        status = response.status >= 200;
      }
      if (status) {
        status = response.status <= 299;
      }
      closure_0.send("api.response", { request, response, duration: tmp5Result }, !status);
    }
  };
  return { features };
};