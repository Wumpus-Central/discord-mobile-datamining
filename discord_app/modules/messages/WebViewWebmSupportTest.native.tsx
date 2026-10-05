// === Module 5041: WebViewWebmSupportTest ===

// Module 5041 (WebViewWebmSupportTest)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import DeviceUtils from "DeviceUtils" /* 4866 */;
import size from "module_2" /* 2 */;

const ARM64_ = "ARM64_";
const result = size.fileFinishedImporting("modules/messages/WebViewWebmSupportTest.native.tsx");

export const isIOSWithWebM = function isIOSWithWebM() {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const tmpResult = DeviceUtils;
    const str = tmpResult.getSocName();
    let tmp4 = null == str || !str.startsWith(ARM64_);
    if (!tmp4) {
      const str2 = str.substring(6);
      let tmp6 = "T" !== str2[0] && "S" !== str2[0];
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
};