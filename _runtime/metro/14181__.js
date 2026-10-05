// === Module 14181: ? ===

// Module 14181
import assertHasLoggerPlugin2 from "assertHasLoggerPlugin" /* 14183 */;
import assertHasStateResponsePlugin2 from "assertHasStateResponsePlugin" /* 14186 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import module_14182_mod from "module_14182" /* 14182 */;
import module_14184 from "module_14184" /* 14184 */;
import module_14185 from "module_14185" /* 14185 */;
import module_14187 from "module_14187" /* 14187 */;
import module_14188 from "module_14188" /* 14188 */;
import repl from "repl" /* 14189 */;
import serialize_mod from "serialize" /* 14190 */;

let onCommand;

let obj11;
let obj13;
let obj15;
let obj6;
let obj8;
let tmp14;
let tmp7;
function emptyPromise() {
  return Promise.resolve("");
}
let module_14182 = module_14182_mod;
if (!module_14182) {
  tmp7 = { default: module_14182 };
  const obj4 = { default: module_14182 };
} else {
  tmp7 = module_14182;
}
module_14182 = tmp7;
const assertHasLoggerPlugin = _interopRequireWildcard(assertHasLoggerPlugin2);
if (!module_14184) {
  obj6 = { default: module_14184 };
  const obj7 = { default: module_14184 };
} else {
  obj6 = module_14184;
}
if (!module_14185) {
  obj8 = { default: module_14185 };
  const obj9 = { default: module_14185 };
} else {
  obj8 = module_14185;
}
const assertHasStateResponsePlugin = _interopRequireWildcard(assertHasStateResponsePlugin2);
if (!module_14187) {
  obj11 = { default: module_14187 };
  const obj12 = { default: module_14187 };
} else {
  obj11 = module_14187;
}
if (!module_14188) {
  obj13 = { default: module_14188 };
  const obj14 = { default: module_14188 };
} else {
  obj13 = module_14188;
}
if (!repl) {
  obj15 = { default: repl };
  const obj16 = { default: repl };
} else {
  obj15 = repl;
}
let serialize = serialize_mod;
if (!serialize) {
  tmp14 = { default: serialize };
  const obj17 = { default: serialize };
} else {
  tmp14 = serialize;
}
serialize = tmp14;
const items = [obj6.default(), assertHasLoggerPlugin.default(), obj8.default(), assertHasStateResponsePlugin.default(), obj11.default(), obj13.default(), obj15.default()];
let closure_9 = ["configure", "connect", "connected", "options", "plugins", "send", "socket", "startTimer", "use"];
class ReactotronImpl {
  constructor() {
    const self = this;
    _classCallCheck(this, ReactotronImpl);
    this.connected = false;
    this.socket = null;
    this.plugins = [];
    this.sendQueue = [];
    this.isReady = false;
    let date = new Date();
    this.lastMessageDate = date;
    this.customCommands = [];
    this.customCommandLatestId = 1;
    this.startTimer = () => ReactotronImpl(closure_1_1[11]).start();
    this.send = (type, payload, important) => {
      const date = new Date();
      const lastMessageDate = self.lastMessageDate;
      const time = date.getTime();
      let num = time - lastMessageDate.getTime();
      if (num < 0) {
        num = 0;
      }
      self.lastMessageDate = date;
      const action = { type, payload, important, date: date.toISOString(), deltaTime: num };
      const defaultResult = closure_2_6.default(action, self.options.proxyHack);
      if (self.isReady) {
        try {
          const socket = self.socket;
          socket.send(defaultResult);
        } catch (err) {
          self.isReady = false;
          const _console = console;
          console.log("An error occurred communicating with reactotron. Please reload your app");
        }
      } else {
        const sendQueue = self.sendQueue;
        sendQueue.push(defaultResult);
      }
    };
  }
}
const entry = {
  key: "configure",
  value: function configure(arg0) {
    const self = this;
    const url = {
      createSocket: null,
      host: "localhost",
      port: 9090,
      name: "reactotron-core-client",
      secure: false,
      plugins: items,
      safeRecursion: true,
      onCommand() {
        return null;
      },
      onConnect() {
        return null;
      },
      onDisconnect() {
        return null;
      }
    };
    const merged = Object.assign(url, this.options, arg0);
    module_14182.default(merged);
    this.options = merged;
    if (Array.isArray(this.options.plugins)) {
      const plugins = self.options.plugins;
      const item = plugins.forEach((item) => self.use(item));
    }
    return self;
  }
};
const items1 = [
  entry,
  {
    key: "close",
    value: function close() {
      const self = this;
      this.connected = false;
      const tmp = this.socket && self.socket.close;
      if (tmp) {
        const socket = self.socket;
        socket.close();
      }
    }
  },
  {
    key: "connect",
    value: function connect() {
      let client;
      let createSocket;
      let host;
      let port;
      let secure;
      const self = this;
      this.connected = true;
      let options = this.options;
      ({ host, environment: dependencyMap, port, name: _classCallCheck, client } = options);
      ({ createSocket, secure } = options);
      if (undefined === client) {
        client = {};
      }
      const getClientId = options.getClientId;
      ({ onCommand: assertHasStateResponsePlugin, onConnect: serialize, onDisconnect: _interopRequireWildcard } = self.options);
      let str = "ws";
      if (secure) {
        str = "wss";
      }
      let socket = createSocket("" + str + "://" + host + ":" + port);
      function onOpen() {
        let environment;
        let name;
        let tmp;
        if (serialize) {
          tmp();
        }
        const plugins = self.plugins;
        const item = plugins.forEach((onConnect) => {
          const tmp = onConnect.onConnect && onConnect.onConnect();
          return tmp;
        });
        const tmp4 = getClientId || emptyPromise;
        const tmp4Result = tmp4(_classCallCheck);
        tmp4Result.then((clientId) => {
          let length;
          self.isReady = true;
          const send = self.send;
          const obj = { environment, name, clientId, reactotronCoreClientVersion: "REACTOTRON_CORE_CLIENT_VERSION" };
          const merged = Object.assign(client);
          send("client.intro", obj);
          if (self.sendQueue.length > 0) {
            do {
              let sendQueue = self.sendQueue;
              let first = self.sendQueue[0];
              self.sendQueue = sendQueue.slice(1);
              let socket = self.socket;
              let sendResult1 = socket.send(first);
              length = self.sendQueue.length;
            } while (length > 0);
          }
        });
      }
      function onClose() {
        self.isReady = false;
        if (_interopRequireWildcard) {
          tmp2();
        }
        const plugins = self.plugins;
        const item = plugins.forEach((onDisconnect) => {
          const tmp = onDisconnect.onDisconnect && onDisconnect.onDisconnect();
          return tmp;
        });
      }
      function onMessage(str) {
        let action;
        let tmp2;
        if (typeof str === "string") {
          const _JSON2 = JSON;
          action = JSON.parse(str);
        } else {
          const _Buffer = Buffer;
          action = str;
          if (Buffer.isBuffer(str)) {
            const _JSON = JSON;
            action = JSON.parse(str.toString());
          }
        }
        if (assertHasStateResponsePlugin) {
          tmp2(action);
        }
        const plugins = self.plugins;
        const item = plugins.forEach((onCommand) => {
          onCommand = onCommand.onCommand && onCommand.onCommand(action);
          return onCommand;
        });
        if ("custom" === action.type) {
          const customCommands = self.customCommands;
          const found = customCommands.filter((command) => {
            let tmp2;
            if (typeof action.payload === "string") {
              tmp2 = command.command === action.payload;
            } else {
              tmp2 = command.command === action.payload.command;
            }
            return tmp2;
          });
          const item1 = found.forEach((handler) => {
            let args;
            handler = handler.handler;
            if (typeof action.payload === "object") {
              args = action.payload.args;
            }
            return handler(args);
          });
        } else {
          const tmp6 = "setClientId" === action.type && self.options.setClientId;
          if (tmp6) {
            const options = self.options;
            options.setClientId(action.payload);
          }
        }
      }
      if ("on" in socket) {
        if (socket.on) {
          socket.on("open", onOpen);
          socket.on("close", onClose);
          socket.on("message", onMessage);
          self.socket = socket;
        }
        return self;
      }
      socket.onopen = onOpen;
      socket.onclose = onClose;
      socket.onmessage = (data) => {
        onMessage(data.data);
      };
      self.socket = socket;
    }
  },
  {
    key: "display",
    value: function display(activity) {
      let image;
      let important;
      let preview;
      let value;
      ({ value, preview, image, important } = activity);
      let tmp = undefined !== important;
      const name = activity.name;
      if (tmp) {
        tmp = important;
      }
      const obj = { name, value, preview, image };
      this.send("display", obj, tmp);
    }
  },
  {
    key: "reportError",
    value: function reportError(arg0) {
      this.error(arg0);
    }
  },
  {
    key: "use",
    value: function use(bind) {
      let self = this;
      if (typeof bind !== "function") {
        const _Error3 = Error;
        const self6 = this;
        const self7 = this;
        let error = new Error("plugins must be a function");
        throw error;
      } else {
        const tmp13 = bind.bind(self)(self);
        const features = tmp13;
        if (typeof tmp13 !== "object") {
          let _Error2 = Error;
          let self4 = this;
          const self5 = this;
          let error1 = new Error("plugins must return an object");
          throw error1;
        } else {
          if (tmp13.features) {
            if (typeof tmp13.features !== "object") {
              let _Error = Error;
              let self2 = this;
              let self3 = this;
              const error2 = new Error("features must be an object");
              throw error2;
            } else {
              function inject(arg0) {

              }
              const _Object = Object;
              const keys = Object.keys(tmp13.features);
              const item = keys.forEach(function(item) {
                if (typeof inject === "function") {
                  if (typeof features.features[item] !== "function") {
                    const _Error2 = Error;
                    const _HermesInternal2 = HermesInternal;
                    const self3 = this;
                    const self4 = this;
                    const error = new Error("feature " + item + " is not a function");
                    throw error;
                  } else {
                    let closure_0 = item;
                    if (closure_9.some((item) => item === closure_0)) {
                      const _Error = Error;
                      const _HermesInternal = HermesInternal;
                      self = this;
                      const self2 = this;
                      const error1 = new Error("feature " + item + " is a reserved name");
                      throw error1;
                    } else {
                      self[item] = features.features[item];
                    }
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
            }
          }
          const plugins = self.plugins;
          plugins.push(tmp13);
          const tmp2 = tmp13.onPlugin && typeof tmp13.onPlugin === "function";
          if (tmp2) {
            const onPlugin = tmp13.onPlugin;
            onPlugin.bind(self)(self);
          }
          return self;
        }
      }
    }
  },
  {
    key: "onCustomCommand",
    value: function onCustomCommand(command, arg1) {
      let args;
      let description;
      let handler;
      let title;
      let self = this;
      if (typeof command === "string") {
        handler = arg1;
      } else {
        command = command.command;
        ({ handler, title, description, args } = command);
      }
      if (tmp) {
        if (handler) {
          let customCommands = self.customCommands;
          const found = customCommands.filter((command) => command.command === command);
          if (found.length > 0) {
            const item = found.forEach((id) => {
              let closure_0 = id;
              const customCommands = self.customCommands;
              self.customCommands = customCommands.filter((id) => id.id !== id.id);
              obj = { id: id.id, command: id.command };
              self.send("customCommand.unregister", obj);
            });
          }
          if (args) {
            let closure_2 = [];
            const item1 = args.forEach(function(name) {
              if (name.name) {
                if (closure_2.indexOf(name.name) > -1) {
                  const _Error2 = Error;
                  const _HermesInternal2 = HermesInternal;
                  const self3 = this;
                  const self4 = this;
                  const error = new Error("A arg with the name \"" + name.name + "\" already exists in the command \"" + command + "\"");
                  throw error;
                } else {
                  closure_2.push(name.name);
                }
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                self = this;
                const self2 = this;
                const error1 = new Error("A arg on the command \"" + command + "\" is missing a name");
                throw error1;
              }
            });
          }
          let obj = { id: self.customCommandLatestId, command: tmp, handler, title, description, args };
          self.customCommandLatestId = self.customCommandLatestId + 1;
          const customCommands1 = self.customCommands;
          customCommands1.push(obj);
          const obj3 = { id: null, command: null, title: null, description: null, args: null };
          ({ id: obj2.id, command: obj2.command, title: obj2.title, description: obj2.description, args: obj2.args } = obj);
          self.send("customCommand.register", obj3);
          return () => {
            let id;
            const customCommands = self.customCommands;
            self.customCommands = customCommands.filter((id) => id.id !== id.id);
            obj = { id: obj.id, command: obj.command };
            self.send("customCommand.unregister", obj);
          };
        } else {
          let _Error2 = Error;
          let _HermesInternal = HermesInternal;
          let self4 = this;
          const self5 = this;
          let error = new Error("A handler is required for command \"" + tmp + "\"");
          throw error;
        }
      } else {
        let _Error = Error;
        let self2 = this;
        let self3 = this;
        let error1 = new Error("A command is required");
        throw error1;
      }
    }
  }
];
const _moduleResult = _createClass(ReactotronImpl, items1);
const unpackModuleId = _moduleResult;
const assertHasLoggerPlugin_export = assertHasLoggerPlugin.assertHasLoggerPlugin;
const assertHasStateResponsePlugin_export = assertHasStateResponsePlugin.assertHasStateResponsePlugin;
const ReactotronImpl_export = _moduleResult;

export { assertHasLoggerPlugin_export as assertHasLoggerPlugin };
export { assertHasStateResponsePlugin_export as assertHasStateResponsePlugin };
export const createClient = function createClient(url) {
  const obj = new unpackModuleId();
  return obj.configure(url);
};
export const hasStateResponsePlugin = assertHasStateResponsePlugin.hasStateResponsePlugin;
export const ArgType = { String: "string" };
export const corePlugins = items;
export { ReactotronImpl_export as ReactotronImpl };