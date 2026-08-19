// === Module 4812: isIOSWithWebM ===

// Module 4812 (isIOSWithWebM)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;

const ARM64_ = "ARM64_";
const result = obj132.fileFinishedImporting("modules/messages/WebViewWebmSupportTest.native.tsx");

export const isIOSWithWebM = function isIOSWithWebM() {
  if (obj.isIOS()) {
    const str = DCDDeviceManager.getSocName();
    let tmp4 = null == str;
    if (!tmp4) {
      tmp4 = !str.startsWith(ARM64_);
    }
    if (!tmp4) {
      const str2 = str.substring(6);
      let tmp6 = "T" !== str2[0];
      if (tmp6) {
        tmp6 = "S" !== str2[0];
      }
      if (!tmp6) {
        const substr = str2.substring(1);
        let tmp8 = "7" !== substr[0];
        if (tmp8) {
          let tmp9 = "8" !== substr[0];
          if (!tmp9) {
            const _parseInt = parseInt;
            tmp9 = parseInt(substr, 10) >= 8101;
          }
          tmp8 = tmp9;
        }
        tmp6 = tmp8;
      }
      tmp4 = tmp6;
    }
    return tmp4;
  } else {
    return false;
  }
  obj = obj1322;
};