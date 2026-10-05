// _runtime/metro/00778__.js
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addAutoIpAddressToSession = function addAutoIpAddressToSession(attrs) {
  if ("aggregates" in attrs) {
    attrs = attrs.attrs;
    let ip_address;
    if (attrs != null) {
      ip_address = attrs.ip_address;
    }
    if (undefined === ip_address) {
      const obj = { ip_address: "{{auto}}" };
      const merged = Object.assign(attrs.attrs);
      attrs.attrs = obj;
    }
  } else if (undefined === attrs.ipAddress) {
    attrs.ipAddress = "{{auto}}";
  }
};
export const addAutoIpAddressToUser = function addAutoIpAddressToUser(user) {
  user = user.user;
  let ip_address;
  if (user != null) {
    ip_address = user.ip_address;
  }
  if (undefined === ip_address) {
    const obj = { ip_address: "{{auto}}" };
    const merged = Object.assign(user.user);
    user.user = obj;
  }
};
