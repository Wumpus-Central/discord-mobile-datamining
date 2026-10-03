// === Module 17772: RoleIconActionSheet ===

// Module 17772 (RoleIconActionSheet)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import TableRow from "TableRow" /* 5993 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet from "ActionSheet" /* 6701 */;
import GuildSettingsRolesActionCreators from "GuildSettingsRolesActionCreators" /* 17769 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17757 */;

const require = globalThis.__r;

require = fn;
const UPLOAD_SMALL_SIZE = fn(1085).UPLOAD_SMALL_SIZE;
const EmojiIntention = fn(1380).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = ["image/png", "image/jpeg"];
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RoleIconActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = require("c").c(27);
  guildId = guildId.guildId;
  _require = guildId;
  const roleId = guildId.roleId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsRolesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== roleId) {
    class I {
      constructor() {
        role = closure_4.getRole(roleId);
        icon = undefined;
        if (role != null) {
          icon = role.icon;
        }
        tmp3 = null != icon;
        if (!tmp3) {
          unicodeEmoji = undefined;
          if (role != null) {
            unicodeEmoji = role.unicodeEmoji;
          }
          tmp3 = null != unicodeEmoji;
        }
        return tmp3;
      }
    }
    const items1 = [roleId];
    cResult[1] = roleId;
    cResult[2] = I;
    cResult[3] = items1;
    let tmp7 = items1;
  } else {
    class I {
      constructor() {
        role = closure_4.getRole(roleId);
        icon = undefined;
        if (role != null) {
          icon = role.icon;
        }
        tmp3 = null != icon;
        if (!tmp3) {
          unicodeEmoji = undefined;
          if (role != null) {
            unicodeEmoji = role.unicodeEmoji;
          }
          tmp3 = null != unicodeEmoji;
        }
        return tmp3;
      }
    }
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, I, tmp7);
  if (cResult[4] !== roleId) {
    class I {
      constructor() {
        role = closure_4.getRole(roleId);
        icon = undefined;
        if (role != null) {
          icon = role.icon;
        }
        tmp3 = null != icon;
        if (!tmp3) {
          unicodeEmoji = undefined;
          if (role != null) {
            unicodeEmoji = role.unicodeEmoji;
          }
          tmp3 = null != unicodeEmoji;
        }
        return tmp3;
      }
    }
    _require = asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_129_0 = undefined;
              let base64;
              let mimeType;
              roleId(4854).hideActionSheet();
              const obj8 = roleId(4854);
              const obj6 = { size, preferredMimeType: "image/png" };
              c3 = 1;
              c4 = 1;
              const obj7 = { value: _var(7274).openImagePicker(obj6), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_129_0 = value;
            base64 = closure_129_0.base64;
            mimeType = closure_129_0.mimeType;
            if (null == base64) {
              c4 = 3;
            } else {
              c0 = mimeType;
              if (mimeType == null) {
                c0 = "";
              }
              if (closure_2_9.includes(c0)) {
                const obj = _var(1481);
                if (dataUriFileSizeResult <= _var(17773).ROLE_ICON_MAX_FILE_SIZE) {
                  _var(17769).updateRoleIcon(closure_1, base64, null);
                  const obj2 = _var(17769);
                }
                dataUriFileSizeResult = _var(1481).dataUriFileSize(base64);
              }
            }
            const intl = _var(1126).intl;
            _var(4567).presentError(intl.string(_var(1126).t.HFyKsa));
            const obj3 = _var(4567);
          }
        } catch (tmp30) {
          c4 = tmp;
          throw tmp30;
        }
      }
    });
    function handleUploadImage() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[4] = roleId;
    cResult[5] = handleUploadImage;
  } else {
    class I {
      constructor() {
        role = closure_4.getRole(roleId);
        icon = undefined;
        if (role != null) {
          icon = role.icon;
        }
        tmp3 = null != icon;
        if (!tmp3) {
          unicodeEmoji = undefined;
          if (role != null) {
            unicodeEmoji = role.unicodeEmoji;
          }
          tmp3 = null != unicodeEmoji;
        }
        return tmp3;
      }
    }
  }
  if (cResult[6] === guildId) {
    class I {
      constructor() {
        role = closure_4.getRole(roleId);
        icon = undefined;
        if (role != null) {
          icon = role.icon;
        }
        tmp3 = null != icon;
        if (!tmp3) {
          unicodeEmoji = undefined;
          if (role != null) {
            unicodeEmoji = role.unicodeEmoji;
          }
          tmp3 = null != unicodeEmoji;
        }
        return tmp3;
      }
    }
    if (cResult[9] !== roleId) {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
      cResult[9] = roleId;
      cResult[10] = T;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
      let obj2 = { title: null };
      let intl = tmp(1126).intl;
      obj2.title = intl.string(tmp(1126).t.B9grJw);
      const tmp13 = closure_7(tmp(6644).BottomSheetTitleHeader, obj2);
      cResult[11] = tmp13;
      const tmp12 = tmp13;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
      let obj3 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl2 = tmp(1126).intl;
      obj3.children = intl2.string(tmp(1126).t.I3YQeV);
      const tmp15 = closure_7(tmp(4886).Text, obj3);
      cResult[12] = tmp15;
      const tmp14 = tmp15;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
      const stringResult = obj5.string(tmp(1126).t.royWSB);
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(tmp(1126).t["mz++Qq"]);
      cResult[13] = stringResult1;
      cResult[14] = stringResult;
      let tmp17 = stringResult;
      const tmp16 = stringResult1;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
      tmp17 = cResult[14];
    }
    if (cResult[15] !== tmp9) {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
      let obj4 = { label: tmp17, subLabel: tmp16, onPress: tmp9 };
      const tmp21 = closure_7(tmp(5993).TableRow, obj4);
      cResult[15] = tmp9;
      cResult[16] = tmp21;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
      const stringResult2 = obj7.string(tmp(1126).t["/Ny2wZ"]);
      cResult[17] = stringResult2;
      let tmp22 = stringResult2;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
    }
    if (cResult[18] !== tmp10) {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
      let obj6 = { label: tmp22, onPress: tmp10 };
      const tmp25 = closure_7(tmp(5993).TableRow, obj6);
      cResult[18] = tmp10;
      cResult[19] = tmp25;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
    }
    if (cResult[20] === T) {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
      if (cResult[23] === tmp20) {
        class T {
          constructor() {
            obj = closure_1(closure_2[9]);
            hideActionSheetResult = obj.hideActionSheet();
            obj2 = closure_0(closure_2[15]);
            updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
            return;
          }
        }
      }
      let obj8 = { children: null };
      const items2 = [tmp12, tmp14, ];
      const obj9 = { hasIcons: false, children: null };
      const items3 = [tmp20, tmp24, tmp26];
      obj9.children = items3;
      items2[2] = closure_8(tmp(6074).TableRowGroup, obj9);
      obj8.children = items2;
      const tmp30 = closure_8(tmp(6701).ActionSheet, obj8);
      cResult[23] = tmp20;
      cResult[24] = tmp24;
      cResult[25] = tmp26;
      cResult[26] = tmp30;
    }
    let tmp27 = null;
    if (stateFromStores) {
      class T {
        constructor() {
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[15]);
          updateRoleIconResult = obj2.updateRoleIcon(roleId, null, null);
          return;
        }
      }
      let obj10 = { variant: "danger", label: null, onPress: null };
      const intl4 = tmp(1126).intl;
      obj10.label = intl4.string(tmp(1126).t["uY+Nk/"]);
      obj10.onPress = T;
      tmp27 = closure_7(tmp(5993).TableRow, obj10);
    }
    cResult[20] = T;
    cResult[21] = stateFromStores;
    cResult[22] = tmp27;
  }
  const fn = function v() {
    let obj2 = { guildId, pickerIntention: constants.COMMUNITY_CONTENT, onPressEmoji: null };
    guildId = asyncGeneratorStep(async (arg0) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_5 = tmp3;
              if (null == closure_0.id) {
                const optionallyDiverseSequence = closure_0.optionallyDiverseSequence;
                let surrogates = optionallyDiverseSequence;
                if (optionallyDiverseSequence == null) {
                  surrogates = closure_0.surrogates;
                }
                if (null != surrogates) {
                  closure_0(17769).updateRoleIcon(surrogates, null, tmp26);
                  const obj5 = closure_0(17769);
                }
              } else {
                c6 = 1;
                const tmp22 = closure_0(17769);
                closure_4 = tmp22;
                const updateRoleIcon = tmp22.updateRoleIcon;
                closure_2 = surrogates;
                c7 = 2;
                c8 = 1;
                const obj7 = { value: closure_0(17773).fetchCustomEmojiAsPngDataUri(closure_0.id), done: false };
                return obj7;
              }
            }
          } else {
            if (1 === tmp7) {
              c6 = 0;
              const intl = closure_0(1126).intl;
              closure_0(4567).presentError(intl.string(closure_0(1126).t.R0RpRX));
              const obj2 = closure_0(4567);
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 !== 2) {
              updateRoleIcon(closure_2, value, null);
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c8 = 3;
        } catch (tmp31) {
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp31;
          } else {
            c7 = tmp;
          }
        }
      }
    });
    obj2.onPressEmoji = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const result = guildId(9866).openEmojiPickerActionSheet(obj2, "stack");
  };
  cResult[6] = guildId;
  cResult[7] = roleId;
  cResult[8] = fn;
  const tmpResult = require("initialize");
}) : ((arg0) => {
  ({ guildId: require, roleId } = arg0);
  dependencyMap = async function _handleUploadImage2() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_129_0 = undefined;
            let base64;
            let mimeType;
            tmp2(tmp5[9]).hideActionSheet();
            const obj8 = tmp2(tmp5[9]);
            const obj6 = { size, preferredMimeType: "image/png" };
            c3 = 1;
            c4 = 1;
            const obj7 = { value: _var(tmp5[10]).openImagePicker(obj6), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_129_0 = value;
          base64 = closure_129_0.base64;
          mimeType = closure_129_0.mimeType;
          if (null == base64) {
            c4 = 3;
          } else {
            _var = mimeType;
            if (mimeType == null) {
              _var = "";
            }
            if (closure_1_9.includes(_var)) {
              const obj = _var(tmp5[11]);
              if (dataUriFileSizeResult <= _var(tmp5[12]).ROLE_ICON_MAX_FILE_SIZE) {
                _var(tmp5[15]).updateRoleIcon(closure_130_1, base64, null);
                const obj2 = _var(tmp5[15]);
              }
              dataUriFileSizeResult = _var(tmp5[11]).dataUriFileSize(base64);
            }
          }
          const intl = _var(tmp5[14]).intl;
          _var(tmp5[13]).presentError(intl.string(_var(tmp5[14]).t.HFyKsa));
          const obj3 = _var(tmp5[13]);
        }
      } catch (tmp30) {
        c4 = tmp;
        throw tmp30;
      }
    }
  };
  const items = [GuildSettingsRolesStore];
  const items1 = [roleId];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    const role = GuildSettingsRolesStore.getRole(roleId);
    let icon;
    if (role != null) {
      icon = role.icon;
    }
    let tmp3 = null != icon;
    if (!tmp3) {
      let unicodeEmoji;
      if (role != null) {
        unicodeEmoji = role.unicodeEmoji;
      }
      tmp3 = null != unicodeEmoji;
    }
    return tmp3;
  }, items1);
  let obj2 = { title: null };
  let intl = util.intl;
  obj2.title = intl.string(util.t.B9grJw);
  const items2 = [closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2), , ];
  let obj3 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.I3YQeV);
  items2[1] = closure_7(Text_Text.Text, obj3);
  let obj4 = { label: null, subLabel: null, onPress: null };
  const intl3 = util.intl;
  obj4.label = intl3.string(util.t.royWSB);
  const intl4 = util.intl;
  obj4.subLabel = intl4.string(util.t["mz++Qq"]);
  obj4.onPress = function handleUploadImage() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const items3 = [closure_7(TableRow.TableRow, obj4), , ];
  let obj5 = { label: null, onPress: null };
  const intl5 = util.intl;
  obj5.label = intl5.string(util.t["/Ny2wZ"]);
  obj5.onPress = function handleSelectEmoji() {
    let obj2 = { guildId, pickerIntention: constants.COMMUNITY_CONTENT, onPressEmoji: null };
    guildId = asyncGeneratorStep(async (arg0) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_5 = tmp3;
              if (null == closure_0.id) {
                const optionallyDiverseSequence = closure_0.optionallyDiverseSequence;
                let surrogates = optionallyDiverseSequence;
                if (optionallyDiverseSequence == null) {
                  surrogates = closure_0.surrogates;
                }
                if (null != surrogates) {
                  closure_0(17769).updateRoleIcon(surrogates, null, tmp26);
                  const obj5 = closure_0(17769);
                }
              } else {
                c6 = 1;
                const tmp22 = closure_0(17769);
                closure_4 = tmp22;
                const updateRoleIcon = tmp22.updateRoleIcon;
                closure_2 = surrogates;
                c7 = 2;
                c8 = 1;
                const obj7 = { value: closure_0(17773).fetchCustomEmojiAsPngDataUri(closure_0.id), done: false };
                return obj7;
              }
            }
          } else {
            if (1 === tmp7) {
              c6 = 0;
              const intl = closure_0(1126).intl;
              closure_0(4567).presentError(intl.string(closure_0(1126).t.R0RpRX));
              const obj2 = closure_0(4567);
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 !== 2) {
              updateRoleIcon(closure_2, value, null);
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c8 = 3;
        } catch (tmp31) {
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp31;
          } else {
            c7 = tmp;
          }
        }
      }
    });
    obj2.onPressEmoji = function onPressEmoji(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const result = guildId(9866).openEmojiPickerActionSheet(obj2, "stack");
  };
  items3[1] = closure_7(TableRow.TableRow, obj5);
  let tmp5Result = null;
  if (stateFromStores) {
    let obj6 = { variant: "danger", label: null, onPress: null };
    const intl6 = util.intl;
    obj6.label = intl6.string(util.t["uY+Nk/"]);
    obj6.onPress = function handleRemoveIcon() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildSettingsRolesActionCreators.updateRoleIcon(roleId, null, null);
    };
    tmp5Result = closure_7(TableRow.TableRow, obj6);
  }
  let obj7 = { children: null };
  items3[2] = tmp5Result;
  items2[2] = closure_8(TableRowGroup.TableRowGroup, { hasIcons: false, children: items3 });
  obj7.children = items2;
  return closure_8(ActionSheet.ActionSheet, obj7);
});