// _runtime/05255_iccTags.js
import _mod5213 from "metro/05213__.js";

require = arg1;
const dependencyMap = arg6;
let obj = { 4: null, 8: null, 12: null, 16: null, 20: null, 24: null, 36: null, 40: null, 48: null, 52: null, 64: null, 80: null };
obj = {
  name: "Preferred CMM type",
  value(dataView, sum) {
    return _mod5213.getStringFromDataView(dataView, sum, 4);
  },
  description(str) {
    if (null === str) {
      return "";
    } else {
      const formatted = str.toLowerCase();
      if ("appl" === formatted) {
        let str6 = "Apple";
      } else if ("adbe" === formatted) {
        str6 = "Adobe";
      } else if ("msft" === formatted) {
        str6 = "Microsoft";
      } else {
        if ("sunw" === formatted) {
          str6 = "Sun Microsystems";
        } else if ("sgi" !== formatted) {
          str6 = "Taligent";
        }
        str6 = "Silicon Graphics";
      }
    }
  }
};
obj[4] = obj;
obj[8] = {
  name: "Profile Version",
  value(getUint8, sum) {
    const str = getUint8.getUint8(sum);
    const text = `${str.toString(10)}.`;
    const str2 = getUint8.getUint8(sum + 1) >> 4;
    const text1 = `${str.toString(10)}.${str2.toString(10)}`;
    return `${str.toString(10)}.${str2.toString(10)}` + "." + getUint8.getUint8(sum + 1) % 16.toString(10);
  }
};
obj[12] = {
  name: "Profile/Device class",
  value(dataView, sum) {
    return _mod5213.getStringFromDataView(dataView, sum, 4);
  },
  description(str) {
    switch (str.toLowerCase()) {
      case "scnr":
        return "Input Device profile";
      case "mntr":
        return "Display Device profile";
      case "prtr":
        return "Output Device profile";
      case "link":
        return "DeviceLink profile";
      case "abst":
        return "Abstract profile";
      case "spac":
        return "ColorSpace profile";
      case "nmcl":
        return "NamedColor profile";
      case "cenc":
        return "ColorEncodingSpace profile";
      case "mid ":
        return "MultiplexIdentification profile";
      case "mlnk":
        return "MultiplexLink profile";
      case "mvis":
        return "MultiplexVisualization profile";
      default:
        return str;
    }
  }
};
obj[16] = {
  name: "Color Space",
  value(dataView, sum) {
    return _mod5213.getStringFromDataView(dataView, sum, 4);
  }
};
obj[20] = {
  name: "Connection Space",
  value(dataView, sum) {
    return _mod5213.getStringFromDataView(dataView, sum, 4);
  }
};
obj[24] = {
  name: "ICC Profile Date",
  value(getUint16, c5) {
    const uint16 = getUint16.getUint16(c5);
    const diff = getUint16.getUint16(c5 + 2) - 1;
    const uint161 = getUint16.getUint16(c5 + 4);
    const uint162 = getUint16.getUint16(c5 + 6);
    const uint163 = getUint16.getUint16(c5 + 8);
    return new Date(Date.UTC(uint16, diff, uint161, uint162, uint163, getUint16.getUint16(c5 + 10))).toISOString();
  }
};
obj[36] = {
  name: "ICC Signature",
  value(buffer, arg1) {
    buffer = buffer.buffer;
    const uint8Array = new Uint8Array(buffer.slice(arg1, arg1 + 4));
    return fromCharCode.apply(null, uint8Array);
  }
};
obj[40] = {
  name: "Primary Platform",
  value(dataView, sum) {
    return _mod5213.getStringFromDataView(dataView, sum, 4);
  },
  description(str) {
    const formatted = str.toLowerCase();
    if ("appl" === formatted) {
      let str5 = "Apple";
    } else if ("adbe" === formatted) {
      str5 = "Adobe";
    } else if ("msft" === formatted) {
      str5 = "Microsoft";
    } else if ("sunw" === formatted) {
      str5 = "Sun Microsystems";
    } else if ("sgi" === formatted) {
      str5 = "Silicon Graphics";
    } else {
      str5 = "Taligent";
      if ("tgnt" !== formatted) {
        str5 = str;
      }
    }
    return str5;
  }
};
obj[48] = {
  name: "Device Manufacturer",
  value(dataView, sum) {
    return _mod5213.getStringFromDataView(dataView, sum, 4);
  },
  description(str) {
    const formatted = str.toLowerCase();
    if ("appl" === formatted) {
      let str5 = "Apple";
    } else if ("adbe" === formatted) {
      str5 = "Adobe";
    } else if ("msft" === formatted) {
      str5 = "Microsoft";
    } else if ("sunw" === formatted) {
      str5 = "Sun Microsystems";
    } else if ("sgi" === formatted) {
      str5 = "Silicon Graphics";
    } else {
      str5 = "Taligent";
      if ("tgnt" !== formatted) {
        str5 = str;
      }
    }
    return str5;
  }
};
obj[52] = {
  name: "Device Model Number",
  value(dataView, sum) {
    return _mod5213.getStringFromDataView(dataView, sum, 4);
  }
};
obj[64] = {
  name: "Rendering Intent",
  value(getUint32, sum) {
    return getUint32.getUint32(sum);
  },
  description(arg0) {
    if (0 === arg0) {
      return "Perceptual";
    } else if (1 === arg0) {
      return "Relative Colorimetric";
    } else if (2 === arg0) {
      return "Saturation";
    } else if (3 === arg0) {
      return "Absolute Colorimetric";
    } else {
      return arg0;
    }
  }
};
obj[80] = {
  name: "Profile Creator",
  value(dataView, sum) {
    return _mod5213.getStringFromDataView(dataView, sum, 4);
  }
};

export const iccTags = { desc: { name: "ICC Description" }, cprt: { name: "ICC Copyright" }, dmdd: { name: "ICC Device Model Description" }, vued: { name: "ICC Viewing Conditions Description" }, dmnd: { name: "ICC Device Manufacturer for Display" }, tech: { name: "Technology" } };
export const iccProfile = obj;