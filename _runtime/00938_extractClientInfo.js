// _runtime/00938_extractClientInfo.js
import isJsonRpcNotification from "00936_isJsonRpcNotification.js";
import weakMap from "00939_weakMap.js";
import _mod940 from "metro/00940__.js";

require = arg1;
const dependencyMap = arg6;
function extractClientInfo(requestInfo) {
  let remoteAddress;
  if (requestInfo != null) {
    requestInfo = requestInfo.requestInfo;
    if (requestInfo != null) {
      remoteAddress = requestInfo.remoteAddress;
    }
  }
  if (!remoteAddress) {
    let clientAddress;
    if (requestInfo != null) {
      clientAddress = requestInfo.clientAddress;
    }
    remoteAddress = clientAddress;
  }
  if (!remoteAddress) {
    let ip;
    if (requestInfo != null) {
      const request = requestInfo.request;
      if (request != null) {
        ip = request.ip;
      }
    }
    remoteAddress = ip;
  }
  if (!remoteAddress) {
    let remoteAddress1;
    if (requestInfo != null) {
      const request2 = requestInfo.request;
      if (request2 != null) {
        const connection = request2.connection;
        if (connection != null) {
          remoteAddress1 = connection.remoteAddress;
        }
      }
    }
    remoteAddress = remoteAddress1;
  }
  const obj = { address: remoteAddress, port: null };
  let remotePort;
  if (requestInfo != null) {
    const requestInfo2 = requestInfo.requestInfo;
    if (requestInfo2 != null) {
      remotePort = requestInfo2.remotePort;
    }
  }
  if (!remotePort) {
    let clientPort;
    if (requestInfo != null) {
      clientPort = requestInfo.clientPort;
    }
    remotePort = clientPort;
  }
  if (!remotePort) {
    let remotePort1;
    if (requestInfo != null) {
      const request3 = requestInfo.request;
      if (request3 != null) {
        const connection2 = request3.connection;
        if (connection2 != null) {
          remotePort1 = connection2.remotePort;
        }
      }
    }
    remotePort = remotePort1;
  }
  obj[1] = remotePort;
  return obj;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.buildClientAttributesFromInfo = function buildClientAttributesFromInfo(clientInfo) {
  let name;
  if (clientInfo != null) {
    name = clientInfo.name;
  }
  const obj = {};
  if (name) {
    obj["mcp.client.name"] = clientInfo.name;
  }
  let title;
  if (clientInfo != null) {
    title = clientInfo.title;
  }
  if (title) {
    obj["mcp.client.title"] = clientInfo.title;
  }
  let version;
  if (clientInfo != null) {
    version = clientInfo.version;
  }
  if (version) {
    obj["mcp.client.version"] = clientInfo.version;
  }
  return obj;
};
arg5.buildServerAttributesFromInfo = function buildServerAttributesFromInfo(serverInfo) {
  let name;
  if (serverInfo != null) {
    name = serverInfo.name;
  }
  const obj = {};
  if (name) {
    obj[_mod940.MCP_SERVER_NAME_ATTRIBUTE] = serverInfo.name;
  }
  let title;
  if (serverInfo != null) {
    title = serverInfo.title;
  }
  if (title) {
    obj[_mod940.MCP_SERVER_TITLE_ATTRIBUTE] = serverInfo.title;
  }
  let version;
  if (serverInfo != null) {
    version = serverInfo.version;
  }
  if (version) {
    obj[_mod940.MCP_SERVER_VERSION_ATTRIBUTE] = serverInfo.version;
  }
  return obj;
};
arg5.buildTransportAttributes = function buildTransportAttributes(transport, extra) {
  let sessionId;
  if (transport) {
    if ("sessionId" in transport) {
      sessionId = transport.sessionId;
    }
  }
  if (extra) {
    let obj = extractClientInfo(extra);
  } else {
    obj = {};
  }
  let constructor;
  if (transport != null) {
    constructor = transport.constructor;
  }
  if (constructor) {
    constructor = transport.constructor;
    let name;
    if (constructor != null) {
      name = constructor.name;
    }
    let str3 = "unknown";
    if (typeof name === "string") {
      str3 = transport.constructor.name;
    }
    const formatted = str3.toLowerCase();
    let str5 = "pipe";
    if (!formatted.includes("stdio")) {
      let hasItem = formatted.includes("http");
      if (!hasItem) {
        hasItem = formatted.includes("sse");
      }
      str5 = "unknown";
      if (hasItem) {
        str5 = "tcp";
      }
    }
    obj = { mcpTransport: null, networkTransport: null };
    obj[0] = str3;
    obj[1] = str5;
  } else {
    obj = { mcpTransport: "unknown", networkTransport: "unknown" };
  }
  ({ mcpTransport, networkTransport } = obj);
  let obj4 = weakMap;
  const clientInfoForTransport = obj4.getClientInfoForTransport(transport);
  let name1;
  if (clientInfoForTransport != null) {
    name1 = clientInfoForTransport.name;
  }
  obj1 = {};
  if (name1) {
    obj1["mcp.client.name"] = clientInfoForTransport.name;
  }
  let title;
  if (clientInfoForTransport != null) {
    title = clientInfoForTransport.title;
  }
  if (title) {
    obj1["mcp.client.title"] = clientInfoForTransport.title;
  }
  let version;
  if (clientInfoForTransport != null) {
    version = clientInfoForTransport.version;
  }
  if (version) {
    obj1["mcp.client.version"] = clientInfoForTransport.version;
  }
  let tmp6Result = tmp6(939);
  const sessionDataForTransport = tmp6Result.getSessionDataForTransport(transport);
  let serverInfo;
  if (sessionDataForTransport != null) {
    serverInfo = sessionDataForTransport.serverInfo;
  }
  let name2;
  if (serverInfo != null) {
    name2 = serverInfo.name;
  }
  const obj2 = {};
  if (name2) {
    obj2[tmp6(940).MCP_SERVER_NAME_ATTRIBUTE] = serverInfo.name;
  }
  let title1;
  if (serverInfo != null) {
    title1 = serverInfo.title;
  }
  if (title1) {
    obj2[tmp6(940).MCP_SERVER_TITLE_ATTRIBUTE] = serverInfo.title;
  }
  let version1;
  if (serverInfo != null) {
    version1 = serverInfo.version;
  }
  if (version1) {
    obj2[tmp6(940).MCP_SERVER_VERSION_ATTRIBUTE] = serverInfo.version;
  }
  tmp6Result = tmp6(939);
  const protocolVersionForTransport = tmp6Result.getProtocolVersionForTransport(transport);
  let tmp18 = sessionId;
  if (sessionId) {
    const obj3 = {};
    obj3[tmp6(940).MCP_SESSION_ID_ATTRIBUTE] = sessionId;
    tmp18 = obj3;
  }
  obj4 = {};
  const merged = Object.assign(tmp18);
  let address = obj.address;
  if (address) {
    const obj5 = {};
    obj5[tmp6(940).CLIENT_ADDRESS_ATTRIBUTE] = obj.address;
    address = obj5;
  }
  const merged1 = Object.assign(address);
  let port = obj.port;
  if (port) {
    const obj6 = {};
    obj6[tmp6(940).CLIENT_PORT_ATTRIBUTE] = obj.port;
    port = obj6;
  }
  const merged2 = Object.assign(port);
  obj4[_mod940.MCP_TRANSPORT_ATTRIBUTE] = mcpTransport;
  obj4[_mod940.NETWORK_TRANSPORT_ATTRIBUTE] = networkTransport;
  obj4[_mod940.NETWORK_PROTOCOL_VERSION_ATTRIBUTE] = "2.0";
  let tmp22 = protocolVersionForTransport;
  if (protocolVersionForTransport) {
    const obj7 = {};
    obj7[tmp6(940).MCP_PROTOCOL_VERSION_ATTRIBUTE] = protocolVersionForTransport;
    tmp22 = obj7;
  }
  const merged3 = Object.assign(tmp22);
  const merged4 = Object.assign(obj1);
  const merged5 = Object.assign(obj2);
  return obj4;
};
arg5.extractClientInfo = extractClientInfo;
arg5.extractSessionDataFromInitializeRequest = function extractSessionDataFromInitializeRequest(params) {
  let obj = {};
  if (obj2.isValidContentItem(params.params)) {
    if (typeof params.params.protocolVersion === "string") {
      obj.protocolVersion = params.params.protocolVersion;
    }
    if (params.params.clientInfo) {
      const clientInfo = params.params.clientInfo;
      obj = {};
      if (tmpResult.isValidContentItem(clientInfo)) {
        if (typeof clientInfo.name === "string") {
          obj.name = clientInfo.name;
        }
        if (typeof clientInfo.title === "string") {
          obj.title = clientInfo.title;
        }
        if (typeof clientInfo.version === "string") {
          obj.version = clientInfo.version;
        }
      }
      obj.clientInfo = obj;
      tmpResult = isJsonRpcNotification;
    }
  }
  return obj;
};
arg5.extractSessionDataFromInitializeResponse = function extractSessionDataFromInitializeResponse(protocolVersion) {
  let obj = {};
  if (obj2.isValidContentItem(protocolVersion)) {
    if (typeof protocolVersion.protocolVersion === "string") {
      obj.protocolVersion = protocolVersion.protocolVersion;
    }
    if (protocolVersion.serverInfo) {
      const serverInfo = protocolVersion.serverInfo;
      obj = {};
      if (tmpResult.isValidContentItem(serverInfo)) {
        if (typeof serverInfo.name === "string") {
          obj.name = serverInfo.name;
        }
        if (typeof serverInfo.title === "string") {
          obj.title = serverInfo.title;
        }
        if (typeof serverInfo.version === "string") {
          obj.version = serverInfo.version;
        }
      }
      obj.serverInfo = obj;
      tmpResult = isJsonRpcNotification;
    }
  }
  return obj;
};
arg5.getClientAttributes = function getClientAttributes(transport) {
  let obj = weakMap;
  const clientInfoForTransport = obj.getClientInfoForTransport(transport);
  let name;
  if (clientInfoForTransport != null) {
    name = clientInfoForTransport.name;
  }
  obj = {};
  if (name) {
    obj["mcp.client.name"] = clientInfoForTransport.name;
  }
  let title;
  if (clientInfoForTransport != null) {
    title = clientInfoForTransport.title;
  }
  if (title) {
    obj["mcp.client.title"] = clientInfoForTransport.title;
  }
  let version;
  if (clientInfoForTransport != null) {
    version = clientInfoForTransport.version;
  }
  if (version) {
    obj["mcp.client.version"] = clientInfoForTransport.version;
  }
  return obj;
};
arg5.getServerAttributes = function getServerAttributes(transport) {
  let obj = weakMap;
  const sessionDataForTransport = obj.getSessionDataForTransport(transport);
  let serverInfo;
  if (sessionDataForTransport != null) {
    serverInfo = sessionDataForTransport.serverInfo;
  }
  let name;
  if (serverInfo != null) {
    name = serverInfo.name;
  }
  obj = {};
  if (name) {
    obj[tmp(940).MCP_SERVER_NAME_ATTRIBUTE] = serverInfo.name;
  }
  let title;
  if (serverInfo != null) {
    title = serverInfo.title;
  }
  if (title) {
    obj[tmp(940).MCP_SERVER_TITLE_ATTRIBUTE] = serverInfo.title;
  }
  let version;
  if (serverInfo != null) {
    version = serverInfo.version;
  }
  if (version) {
    obj[tmp(940).MCP_SERVER_VERSION_ATTRIBUTE] = serverInfo.version;
  }
  return obj;
};
arg5.getTransportTypes = function getTransportTypes(arg0) {
  let constructor;
  if (arg0 != null) {
    constructor = arg0.constructor;
  }
  if (constructor) {
    constructor = arg0.constructor;
    let name;
    if (constructor != null) {
      name = constructor.name;
    }
    let str2 = "unknown";
    if (typeof name === "string") {
      str2 = arg0.constructor.name;
    }
    const formatted = str2.toLowerCase();
    let str4 = "pipe";
    if (!formatted.includes("stdio")) {
      let hasItem = formatted.includes("http");
      if (!hasItem) {
        hasItem = formatted.includes("sse");
      }
      str4 = "unknown";
      if (hasItem) {
        str4 = "tcp";
      }
    }
    const obj = { mcpTransport: null, networkTransport: null };
    obj[0] = str2;
    obj[1] = str4;
    return obj;
  } else {
    return { mcpTransport: "unknown", networkTransport: "unknown" };
  }
};