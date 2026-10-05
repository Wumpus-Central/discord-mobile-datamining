// === Module 14182: ? ===

// Module 14182

export default function(createSocket) {
  let host;
  let port;
  ({ host, port } = createSocket);
  if (null != createSocket.createSocket) {
    let tmp5 = typeof host === "string";
    if (typeof host === "string") {
      tmp5 = host;
    }
    if (tmp5) {
      tmp5 = "" !== host;
    }
    if (tmp5) {
      let tmp9 = typeof port === "number";
      if (typeof port === "number") {
        tmp9 = port >= 1;
      }
      if (tmp9) {
        tmp9 = port <= 65535;
      }
      if (tmp9) {
        if (typeof tmp !== "function") {
          const _Error4 = Error;
          const self7 = this;
          const self8 = this;
          const error = new Error("invalid onCommand handler");
          throw error;
        }
      } else {
        const _Error3 = Error;
        const self5 = this;
        const self6 = this;
        const error1 = new Error("invalid port");
        throw error1;
      }
    } else {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error2 = new Error("invalid host");
      throw error2;
    }
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error3 = new Error("invalid createSocket function");
    throw error3;
  }
};