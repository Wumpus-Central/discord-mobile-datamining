// _runtime/metro/13958__.js
arg5.default = (createSocket) => {
  ({ host, port } = createSocket);
  if (null != createSocket.createSocket) {
    let tmp7 = typeof host === "string";
    if (typeof host === "string") {
      tmp7 = host;
    }
    if (tmp7) {
      tmp7 = "" !== host;
    }
    if (tmp7) {
      let tmp13 = typeof port === "number";
      if (typeof port === "number") {
        tmp13 = port >= 1;
      }
      if (tmp13) {
        tmp13 = port <= 65535;
      }
      if (tmp13) {
        if (typeof tmp !== "function") {
          const _Error4 = Error;
          error = new Error("invalid onCommand handler");
          throw error;
        }
      } else {
        const _Error3 = Error;
        const error1 = new Error("invalid port");
        throw error1;
      }
    } else {
      const _Error2 = Error;
      const error2 = new Error("invalid host");
      throw error2;
    }
  } else {
    const _Error = Error;
    const error3 = new Error("invalid createSocket function");
    throw error3;
  }
};