// === Module 6711: RoleIcon ===

// Module 6711 (RoleIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let num = 0.9375;
if (PlatformUtils.isAndroid()) {
  num = 0.8125;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let src;
  let tmp4;
  let unicodeEmoji;
  const obj = react2;
  const cResult = obj.c(19);
  ({ src, unicodeEmoji, size } = arg0);
  num = 20;
  if (undefined !== size) {
    num = size;
  }
  if (cResult[0] !== num) {
    const size1 = { height: num, width: num };
    cResult[0] = num;
    cResult[1] = size1;
    tmp4 = size1;
  } else {
    tmp4 = cResult[1];
  }
  const result = num * num;
  if (cResult[2] === num) {
    let tmp6;
    if (cResult[3] === result) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4) {
      let tmp7;
      let tmp13;
      if (cResult[6] === tmp6) {
        tmp7 = cResult[7];
      }
      if (null != src) {
        let tmp14;
        if (cResult[8] !== src) {
          const obj2 = { uri: src };
          cResult[8] = src;
          cResult[9] = obj2;
          tmp14 = obj2;
        } else {
          tmp14 = cResult[9];
        }
        if (cResult[10] === tmp7.roleIcon) {
          let tmp15;
          if (cResult[11] === tmp14) {
            tmp15 = cResult[12];
          }
          tmp13 = tmp15;
        }
        const tmp18 = <Image resizeMode="contain" source={tmp14} style={tmp7.roleIcon} />;
        cResult[10] = tmp7.roleIcon;
        cResult[11] = tmp14;
        cResult[12] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp13 = null;
        if (null != unicodeEmoji) {
          if (cResult[13] === tmp7.roleIcon) {
            let tmp9;
            if (cResult[14] === tmp7.unicodeEmojiRoleIcon) {
              tmp9 = cResult[15];
            }
            if (cResult[16] === tmp9) {
              let tmp10;
              if (cResult[17] === unicodeEmoji.surrogates) {
                tmp10 = cResult[18];
              }
              tmp13 = tmp10;
            }
            const tmp12 = jsx(Text_Text.Text, { allowFontScaling: false, color: "none", style: tmp9, variant: "text-lg/normal", children: unicodeEmoji.surrogates });
            cResult[16] = tmp9;
            cResult[17] = unicodeEmoji.surrogates;
            cResult[18] = tmp12;
            tmp10 = tmp12;
          }
          const items = [, ];
          ({ roleIcon: arr[0], unicodeEmojiRoleIcon: arr[1] } = tmp7);
          cResult[13] = tmp7.roleIcon;
          cResult[14] = tmp7.unicodeEmojiRoleIcon;
          cResult[15] = items;
          tmp9 = items;
        }
      }
      return tmp13;
    }
    const obj5 = { roleIcon: tmp4, unicodeEmojiRoleIcon: tmp6 };
    cResult[5] = tmp4;
    cResult[6] = tmp6;
    cResult[7] = obj5;
    tmp7 = obj5;
  }
  const obj6 = { fontFamily: "System", fontSize: result, lineHeight: "unicodeVersion", textAlign: -102143, width: num, marginBottom: 1358954865 };
  cResult[2] = num;
  cResult[3] = result;
  cResult[4] = obj6;
  tmp6 = obj6;
}) : ((arg0) => {
  let src;
  let tmp;
  let unicodeEmoji;
  ({ src, unicodeEmoji, size } = arg0);
  if (size === undefined) {
    size = 20;
  }
  const size1 = { height: size, width: size };
  const obj = { fontFamily: "System", fontSize: size * num, lineHeight: "unicodeVersion", textAlign: -102143, width: size, marginBottom: 1358954865 };
  if (null != src) {
    tmp = <Image resizeMode="contain" source={{ uri: src }} style={size1} />;
    const obj3 = { uri: src };
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      const items = [size1, obj];
      tmp = jsx(Text_Text.Text, { allowFontScaling: false, color: "none", style: items, variant: "text-lg/normal", children: unicodeEmoji.surrogates });
    }
  }
  return tmp;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default tmp3;