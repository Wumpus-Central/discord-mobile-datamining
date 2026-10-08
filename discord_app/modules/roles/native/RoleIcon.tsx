// discord_app/modules/roles/native/RoleIcon.tsx
import c from "../../../../_runtime/00576_c.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const Text_Text = Text(5086);
require = fn;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1381);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RoleIcon(arg0) {
      let Text = require;
      let tmp = dependencyMap;
      const cResult = c.c(19);
      ({ src, unicodeEmoji, size } = arg0);
      num = 20;
      if (undefined !== size) {
        num = size;
      }
      if (cResult[0] !== num) {
        const size1 = { height: num, width: num };
        cResult[0] = num;
        cResult[1] = size1;
        let tmp3 = size1;
      } else {
        tmp3 = cResult[1];
      }
      const result = num * num;
      if (cResult[2] === num) {
        if (cResult[3] === result) {
          let tmp5 = cResult[4];
        }
        if (cResult[5] === tmp3) {
          if (cResult[6] === tmp5) {
            let roleIcon = cResult[7];
          }
          if (null != src) {
            if (cResult[8] !== src) {
              const obj2 = { uri: src };
              cResult[8] = src;
              cResult[9] = obj2;
              let tmp12 = obj2;
            } else {
              tmp12 = cResult[9];
            }
            if (cResult[10] === roleIcon.roleIcon) {
            }
            const obj3 = { resizeMode: "contain", source: tmp12, style: roleIcon.roleIcon };
            tmp = jsx(FastImageDefault, { resizeMode: "contain", source: tmp12, style: roleIcon.roleIcon });
            roleIcon = roleIcon.roleIcon;
            cResult[10] = roleIcon;
            cResult[11] = tmp12;
            cResult[12] = tmp;
          } else if (null == unicodeEmoji) {
            return null;
          } else {
            if (cResult[13] === roleIcon.roleIcon) {
              if (cResult[14] === roleIcon.unicodeEmojiRoleIcon) {
                let tmp7 = cResult[15];
              }
              if (cResult[16] === tmp7) {
              }
              Text = Text_Text.Text;
              const obj4 = {
                allowFontScaling: false,
                color: "none",
                style: tmp7,
                variant: "text-lg/normal",
                children: unicodeEmoji.surrogates,
              };
              const tmp10 = (
                <Text allowFontScaling={false} color="none" style={tmp7} variant="text-lg/normal">
                  {unicodeEmoji.surrogates}
                </Text>
              );
              cResult[16] = tmp7;
              unicodeEmoji = unicodeEmoji.surrogates;
              cResult[17] = unicodeEmoji;
              cResult[18] = tmp10;
            }
            const items = [,];
            ({ roleIcon: arr[0], unicodeEmojiRoleIcon: arr[1] } = roleIcon);
            cResult[13] = roleIcon.roleIcon;
            cResult[14] = roleIcon.unicodeEmojiRoleIcon;
            cResult[15] = items;
            tmp7 = items;
          }
        }
        const obj5 = { roleIcon: tmp3, unicodeEmojiRoleIcon: tmp5 };
        cResult[5] = tmp3;
        cResult[6] = tmp5;
        cResult[7] = obj5;
        roleIcon = obj5;
      }
      const obj6 = {
        fontFamily: "System",
        fontSize: result,
        lineHeight: "code",
        textAlign: "STORAGE_SECURE_KEYS",
        width: num,
        marginBottom: "buildSkippedNetworkRequestOrResponse",
      };
      cResult[2] = num;
      cResult[3] = result;
      cResult[4] = obj6;
      tmp5 = obj6;
    }
  : function RoleIcon(arg0) {
      ({ src, unicodeEmoji, size } = arg0);
      if (size === undefined) {
        size = 20;
      }
      const size1 = { height: size, width: size };
      const obj = {
        fontFamily: "System",
        fontSize: size * num,
        lineHeight: "code",
        textAlign: "STORAGE_SECURE_KEYS",
        width: size,
        marginBottom: "buildSkippedNetworkRequestOrResponse",
      };
      if (null != src) {
        const obj2 = { resizeMode: "contain", source: null, style: null };
        const obj3 = { uri: src };
        obj2.source = obj3;
        obj2.style = size1;
        let tmp = jsx(FastImageDefault, { resizeMode: "contain", source: null, style: null });
      } else {
        tmp = null;
        if (null != unicodeEmoji) {
          const obj4 = {
            allowFontScaling: false,
            color: "none",
            style: null,
            variant: "text-lg/normal",
            children: null,
          };
          const items = [size1, obj];
          obj4.style = items;
          obj4.children = unicodeEmoji.surrogates;
          tmp = jsx(Text_Text.Text, {
            allowFontScaling: false,
            color: "none",
            style: null,
            variant: "text-lg/normal",
            children: null,
          });
        }
      }
      return tmp;
    };
