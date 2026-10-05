// === Module 7387: iccTags ===

// Module 7387 (iccTags)
import _mod7345 from "module_7345" /* 7345 */;

let obj = {
  4: null,
  8: null,
  12: null,
  16: null,
  20: null,
  24: null,
  36: null,
  40: null,
  48: {
    name: "Profile Version",
    value(getUint8, sum) {
      const str = getUint8.getUint8(sum);
      const text = `${str.toString(10)}.`;
      const str2 = getUint8.getUint8(sum + 1) >> 4;
      const text1 = `${str.toString(10)}.${str2.toString(10)}`;
      const str3 = getUint8.getUint8(sum + 1) % 16;
      return `${str.toString(10)}.${str2.toString(10)}` + "." + str3.toString(10);
    }
  },
  52: null,
  64: null,
  80: null
};
const obj2 = {
  name: "Preferred CMM type",
  value(dataView, sum) {
    const obj = _mod7345;
    return obj.getStringFromDataView(dataView, sum, 4);
  },
  description(str) {
    str = "";
    if (null !== str) {
      let str7;
      const formatted = str.toLowerCase();
      if ("appl" === formatted) {
        str7 = "Apple";
      } else if ("adbe" === formatted) {
        str7 = "Adobe";
      } else if ("msft" === formatted) {
        str7 = "Microsoft";
      } else if ("sunw" === formatted) {
        str7 = "Sun Microsystems";
      } else if ("sgi" === formatted) {
        str7 = "Silicon Graphics";
      } else {
        str7 = "Taligent";
        if ("tgnt" !== formatted) {
          str7 = str;
        }
      }
      str = str7;
    }
    return str;
  }
};
obj[4] = obj2;
obj[12] = {
  name: "Profile/Device class",
  value(dataView, sum) {
    const obj = _mod7345;
    return obj.getStringFromDataView(dataView, sum, 4);
  },
  description(str) {
    switch (str.toLowerCase()) {
      case "scnr":
      {
        return "Input Device profile";
      }
      case "mntr":
      {
        return "Display Device profile";
      }
      case "prtr":
      {
        return "Output Device profile";
      }
      case "link":
      {
        return "DeviceLink profile";
      }
      case "abst":
      {
        return "Abstract profile";
      }
      case "spac":
      {
        return "ColorSpace profile";
      }
      case "nmcl":
      {
        return "NamedColor profile";
      }
      case "cenc":
      {
        return "ColorEncodingSpace profile";
      }
      case "mid ":
      {
        return "MultiplexIdentification profile";
      }
      case "mlnk":
      {
        return "MultiplexLink profile";
      }
      case "mvis":
      {
        return "MultiplexVisualization profile";
      }
      default:
      {
        return str;
      }
    }
  }
};
obj[16] = {
  name: "Color Space",
  value(dataView, sum) {
    const obj = _mod7345;
    return obj.getStringFromDataView(dataView, sum, 4);
  }
};
obj[20] = {
  name: "Connection Space",
  value(dataView, sum) {
    const obj = _mod7345;
    return obj.getStringFromDataView(dataView, sum, 4);
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
    const date = new Date(Date.UTC(uint16, diff, uint161, uint162, uint163, getUint16.getUint16(c5 + 10)));
    return date.toISOString();
  }
};
obj[36] = {
  name: "ICC Signature",
  value(buffer, arg1) {
    buffer = buffer.buffer;
    const apply = fromCharCode.apply;
    const uint8Array = new Uint8Array(buffer.slice(arg1, arg1 + 4));
    return apply(null, uint8Array);
  }
};
obj[40] = {
  name: "Primary Platform",
  value(dataView, sum) {
    const obj = _mod7345;
    return obj.getStringFromDataView(dataView, sum, 4);
  },
  description(str) {
    let str5;
    const formatted = str.toLowerCase();
    if ("appl" === formatted) {
      str5 = "Apple";
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
    const obj = _mod7345;
    return obj.getStringFromDataView(dataView, sum, 4);
  },
  description(str) {
    let str5;
    const formatted = str.toLowerCase();
    if ("appl" === formatted) {
      str5 = "Apple";
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
    const obj = _mod7345;
    return obj.getStringFromDataView(dataView, sum, 4);
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
    const obj = _mod7345;
    return obj.getStringFromDataView(dataView, sum, 4);
  }
};

export const iccTags = { desc: { name: "ICC Description" }, cprt: { name: "ICC Copyright" }, dmdd: { name: "ICC Device Model Description" }, vued: { name: "ICC Viewing Conditions Description" }, dmnd: { name: "ICC Device Manufacturer for Display" }, tech: { name: "Technology" } };
export const iccProfile = obj;