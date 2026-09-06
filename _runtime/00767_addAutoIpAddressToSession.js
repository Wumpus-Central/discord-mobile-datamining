// _runtime/00767_addAutoIpAddressToSession.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addAutoIpAddressToSession = function addAutoIpAddressToSession(attrs) {
  if ("aggregates" in attrs) {
    attrs = attrs.attrs;
    let ip_address;
    if (attrs != null) {
      ip_address = attrs.ip_address;
    }
    if (undefined === ip_address) {
      const obj = {};
      const merged = Object.assign(attrs.attrs);
      obj.ip_address = "{{auto}}";
      attrs.attrs = obj;
    }
  } else if (undefined === attrs.ipAddress) {
    attrs.ipAddress = "{{auto}}";
  }
};
arg5.addAutoIpAddressToUser = function addAutoIpAddressToUser(user) {
  user = user.user;
  let ip_address;
  if (user != null) {
    ip_address = user.ip_address;
  }
  if (undefined === ip_address) {
    const obj = {};
    const merged = Object.assign(user.user);
    obj.ip_address = "{{auto}}";
    user.user = obj;
  }
};
