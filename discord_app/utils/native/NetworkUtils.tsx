// discord_app/utils/native/NetworkUtils.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import Constants from "../../Constants.tsx";
import configure from "../../../_runtime/01463_configure.js";
import size from "../../../_runtime/metro/00002__.js";

function notifyListeners(isConnected) {
  isConnected = isConnected.isConnected;
  ({ type, details } = isConnected);
  obj = { type, effectiveSpeed: null, serviceProvider: null };
  let cellularGeneration = null;
  if (type === NetworkConnectionTypes.CELLULAR) {
    cellularGeneration = details.cellularGeneration;
  }
  obj.effectiveSpeed = cellularGeneration;
  let carrier = null;
  if (type === NetworkConnectionTypes.CELLULAR) {
    carrier = details.carrier;
  }
  obj.serviceProvider = carrier;
  flag = isConnected;
  if (isConnected == null) {
    flag = false;
  }
  obj.log(
    "Network status changed: isConnected:" +
      isConnected +
      " type:" +
      isConnected.type +
      " speed:" +
      obj.cellularGeneration,
  );
  const item = isConnected
    ? closure_4
    : closure_5.forEach((fn) => {
        flag = isConnected;
        if (isConnected == null) {
          flag = false;
        }
        return fn(flag, obj);
      });
  const item1 = closure_6.forEach((fn) => fn(obj));
}
const NetworkConnectionTypes = Constants.NetworkConnectionTypes;
let obj = new LoggerDefault("NetworkUtils");
obj.enableNativeLogger(true);
let closure_4 = [];
let closure_5 = [];
let closure_6 = [];
let c7 = null;
configure = configure.fetch();
configure.then((isConnected) => {
  flag = isConnected.isConnected;
  if (flag == null) {
    flag = false;
  }
});
obj = {
  addOnlineCallback(_handleNetworkOnline) {
    closure_4.push(_handleNetworkOnline);
    if (null == c7) {
      c7 = configure.addEventListener(notifyListeners);
    }
  },
  removeOnlineCallback(_handleNetworkOnline) {
    const index = closure_4.indexOf(_handleNetworkOnline);
    if (-1 !== index) {
      arr.splice(index, 1);
      let tmp5 = null != _null;
      if (tmp5) {
        tmp5 = 0 === arr.length;
      }
      if (tmp5) {
        tmp5 = 0 === closure_5.length;
      }
      if (tmp5) {
        tmp5 = 0 === closure_6.length;
      }
      if (tmp5) {
        _null();
        _null = null;
      }
    }
  },
  addOfflineCallback(_handleNetworkOffline) {
    closure_5.push(_handleNetworkOffline);
    if (null == c7) {
      c7 = configure.addEventListener(notifyListeners);
    }
  },
  removeOfflineCallback(_handleNetworkOffline) {
    const index = closure_5.indexOf(_handleNetworkOffline);
    if (-1 !== index) {
      arr.splice(index, 1);
      let tmp5 = null != _null;
      if (tmp5) {
        tmp5 = 0 === closure_4.length;
      }
      if (tmp5) {
        tmp5 = 0 === arr.length;
      }
      if (tmp5) {
        tmp5 = 0 === closure_6.length;
      }
      if (tmp5) {
        _null();
        _null = null;
      }
    }
  },
  addChangeCallback(handleConnectionInfoChange) {
    closure_6.push(handleConnectionInfoChange);
    if (null == c7) {
      c7 = configure.addEventListener(notifyListeners);
    }
  },
  removeChangeCallback(arg0) {
    const index = closure_6.indexOf(arg0);
    if (-1 !== index) {
      arr.splice(index, 1);
      let tmp5 = null != _null;
      if (tmp5) {
        tmp5 = 0 === closure_4.length;
      }
      if (tmp5) {
        tmp5 = 0 === closure_5.length;
      }
      if (tmp5) {
        tmp5 = 0 === arr.length;
      }
      if (tmp5) {
        _null();
        _null = null;
      }
    }
  },
  getNetworkInformation() {
    const response = configure.fetch();
    return response.then((result) => {
      ({ type, details } = result);
      obj = { type, effectiveSpeed: null, serviceProvider: null };
      let cellularGeneration = null;
      if (type === constants.CELLULAR) {
        cellularGeneration = details.cellularGeneration;
      }
      obj.effectiveSpeed = cellularGeneration;
      let carrier = null;
      if (type === constants.CELLULAR) {
        carrier = details.carrier;
      }
      obj.serviceProvider = carrier;
      return obj;
    });
  },
  isOnline() {
    return flag;
  },
};
const result = size.fileFinishedImporting("utils/native/NetworkUtils.tsx");

export default obj;
