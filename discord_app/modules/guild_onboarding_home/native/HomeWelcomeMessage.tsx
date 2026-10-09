// === Module 16935: HomeWelcomeMessage ===

// Module 16935 (HomeWelcomeMessage)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5087 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8295 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1390 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6919 */;

require = fn;
function replaceUsernameVariable(message, str, username) {
  let diff;
  const parts = str.split(/\[@username\]/g);
  const items = [];
  let num = 0;
  if (0 < parts.length - 1) {
    do {
      let obj = { variant: "text-sm/normal", style: message.message, children: parts[num] };
      let arr = items.push(closure_1_8(Text_Text.Text, obj, num));
      let obj2 = { variant: "text-sm/bold", style: message.message, children: null };
      let _HermesInternal = HermesInternal;
      obj2.children = "@" + username;
      let _HermesInternal2 = HermesInternal;
      let arr2 = items.push(closure_1_8(Text_Text.Text, obj2, "" + num + "-user"));
      num = num + 1;
      diff = parts.length - 1;
    } while (num < diff);
  }
  items.push(closure_1_8(Text_Text.Text, { variant: "text-sm/normal", style: message.message, children: parts[parts.length - 1] }, parts.length));
  return items;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { relativeContainer: { position: "relative" }, welcomeContainer: { marginHorizontal: 12, marginVertical: 16, borderRadius: nativeDefault.radii.sm, padding: 2, display: "flex", flexDirection: "column" }, welcomeContent: null, avatarBackground: null, avatarBorder: null, avatar: null, adminUsernameContainer: null, adminUsername: null, message: null, icon: null };
let obj3 = { marginHorizontal: 12, marginVertical: 16, borderRadius: nativeDefault.radii.sm, padding: 2, display: "flex", flexDirection: "column" };
obj2.welcomeContent = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: 12, paddingBottom: 12, paddingTop: 4 };
let size = { position: "absolute", zIndex: 2, top: 0, left: 28, width: 40, height: 40, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.avatarBackground = size;
const size1 = { position: "absolute", top: -2, zIndex: -1, left: 26, width: 44, height: 44, borderRadius: nativeDefault.radii.round };
obj2.avatarBorder = size1;
obj2.avatar = { position: "absolute", top: 0, zIndex: 3, left: 28 };
obj2.adminUsernameContainer = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 4, paddingLeft: 44 };
let obj4 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: 12, paddingBottom: 12, paddingTop: 4 };
obj2.adminUsername = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
let obj5 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
obj2.message = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.icon = { marginLeft: 4 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { color: nativeDefault.colors.TEXT_DEFAULT };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HomeWelcomeMessage(guildId) {
  const cResult = guildId(stateFromStores2[9]).c(74);
  guildId = guildId.guildId;
  closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class C {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = guildId(stateFromStores2[9]);
  const stateFromStores = guildId(stateFromStores2[10]).useStateFromStores(tmp5, C);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildOnboardingHomeSettingsStore];
    class C {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[2] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    const fn = function f() {
      return GuildOnboardingHomeSettingsStore.getWelcomeMessage(guildId);
    };
    cResult[3] = guildId;
    class C {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[4] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[4];
  }
  const tmpResult = guildId(stateFromStores2[10]);
  const stateFromStores1 = guildId(stateFromStores2[10]).useStateFromStores(tmp9, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class C {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[5] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[5];
  }
  let first;
  if (stateFromStores1 != null) {
    first = stateFromStores1.authorIds[0];
  }
  if (cResult[6] !== first) {
    let first1;
    if (stateFromStores1 != null) {
      first1 = stateFromStores1.authorIds[0];
    }
    class I {
      constructor() {
        first = undefined;
        tmp = closure_6;
        if (closure_1 != null) {
          first = closure_1.authorIds[0];
        }
        return closure_6.getUser(first);
      }
    }
    class C {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[6] = first1;
    cResult[7] = I;
    let tmp16 = I;
  } else {
    tmp16 = cResult[7];
  }
  const tmpResult5 = guildId(stateFromStores2[10]);
  stateFromStores2 = guildId(stateFromStores2[10]).useStateFromStores(tmp13, tmp16);
  let id;
  const tmp19 = stateFromStores1;
  const tmpResult6 = guildId(stateFromStores2[10]);
  if (stateFromStores2 != null) {
    id = stateFromStores2.id;
  }
  const tmp20Result = stateFromStores1(stateFromStores2[11])(id, guildId);
  if (cResult[8] === stateFromStores2) {
    if (cResult[9] === tmp20Result) {
      let tmp23 = cResult[10];
    }
    class I {
      constructor() {
        first = undefined;
        tmp = closure_6;
        if (closure_1 != null) {
          first = closure_1.authorIds[0];
        }
        return closure_6.getUser(first);
      }
    }
    class C {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    const secondaryColor = tmp19(tmp2[12])(tmp23).secondaryColor;
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = ["#B8CDFF", "#8CD9FF"];
      class I {
        constructor() {
          first = undefined;
          tmp = closure_6;
          if (closure_1 != null) {
            first = closure_1.authorIds[0];
          }
          return closure_6.getUser(first);
        }
      }
      class C {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const items4 = [];
      class I {
        constructor() {
          first = undefined;
          tmp = closure_6;
          if (closure_1 != null) {
            first = closure_1.authorIds[0];
          }
          return closure_6.getUser(first);
        }
      }
      class C {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      cResult[12] = items4;
      let tmp26 = items4;
    } else {
      tmp26 = cResult[12];
    }
    if (cResult[13] !== guildId) {
      class E {
        constructor() {
          return closure_5.getGuild(guildId);
        }
      }
      class I {
        constructor() {
          first = undefined;
          tmp = closure_6;
          if (closure_1 != null) {
            first = closure_1.authorIds[0];
          }
          return closure_6.getUser(first);
        }
      }
      class C {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      cResult[14] = E;
    } else {
      class E {
        constructor() {
          return closure_5.getGuild(guildId);
        }
      }
    }
    const tmp24 = tmp19(tmp2[12])(tmp23);
    const stateFromStores3 = tmp(tmp2[10]).useStateFromStores(tmp26, E);
    if (stateFromStores1 != null) {
      class E {
        constructor() {
          return closure_5.getGuild(guildId);
        }
      }
    }
    if (cResult[15] !== undefined) {
      class E {
        constructor() {
          return closure_5.getGuild(guildId);
        }
      }
      if (stateFromStores1 != null) {
        class E {
          constructor() {
            return closure_5.getGuild(guildId);
          }
        }
      }
      class I {
        constructor() {
          first = undefined;
          tmp = closure_6;
          if (closure_1 != null) {
            first = closure_1.authorIds[0];
          }
          return closure_6.getUser(first);
        }
      }
      class C {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      if (stateFromStores1 != null) {
        class E {
          constructor() {
            return closure_5.getGuild(guildId);
          }
        }
      }
      cResult[15] = tmp33;
      cResult[16] = tmp32;
    } else {
      class E {
        constructor() {
          return closure_5.getGuild(guildId);
        }
      }
    }
    if (cResult[17] === guildId) {
      class E {
        constructor() {
          return closure_5.getGuild(guildId);
        }
      }
      tmp(tmp2[13]);
      class I {
        constructor() {
          first = undefined;
          tmp = closure_6;
          if (closure_1 != null) {
            first = closure_1.authorIds[0];
          }
          return closure_6.getUser(first);
        }
      }
      class C {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      if (cResult[20] === stateFromStores2) {
        class E {
          constructor() {
            return closure_5.getGuild(guildId);
          }
        }
        class I {
          constructor() {
            first = undefined;
            tmp = closure_6;
            if (closure_1 != null) {
              first = closure_1.authorIds[0];
            }
            return closure_6.getUser(first);
          }
        }
        class C {
          constructor() {
            return closure_1_6.getCurrentUser();
          }
        }
        if (cResult[23] === stateFromStores2) {
          class E {
            constructor() {
              return closure_5.getGuild(guildId);
            }
          }
          class I {
            constructor() {
              first = undefined;
              tmp = closure_6;
              if (closure_1 != null) {
                first = closure_1.authorIds[0];
              }
              return closure_6.getUser(first);
            }
          }
          class C {
            constructor() {
              return closure_1_6.getCurrentUser();
            }
          }
          const name = obj8.useName(stateFromStores);
          if (null != stateFromStores1) {
            class E {
              constructor() {
                return closure_5.getGuild(guildId);
              }
            }
          }
          return null;
        }
        const items5 = [stateFromStores2, stateFromStores3];
        class W {
          constructor() {
            obj = closure_2;
            tmp = null == closure_2 || obj.isNonUserBot();
            if (!tmp) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              tmp5 = closure_3;
              id1 = undefined;
              tmp4 = closure_1(closure_2[14]);
              ({ id, getAvatarURL } = obj);
              if (closure_3 != null) {
                id1 = tmp5.id;
              }
              num = 80;
              id2 = undefined;
              avatarURL = getAvatarURL(id1, 80);
              if (tmp5 != null) {
                id2 = tmp5.id;
              }
              obj1 = { dispatchWait: true, guildId: null };
              obj1.guildId = id2;
              tmp4Result = tmp4(id, avatarURL, obj1);
            }
            return;
          }
        }
        cResult[24] = stateFromStores3;
        cResult[25] = items5;
      }
      cResult[20] = stateFromStores2;
      if (stateFromStores3 != null) {
        class E {
          constructor() {
            return closure_5.getGuild(guildId);
          }
        }
      }
      class W {
        constructor() {
          obj = closure_2;
          tmp = null == closure_2 || obj.isNonUserBot();
          if (!tmp) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            tmp5 = closure_3;
            id1 = undefined;
            tmp4 = closure_1(closure_2[14]);
            ({ id, getAvatarURL } = obj);
            if (closure_3 != null) {
              id1 = tmp5.id;
            }
            num = 80;
            id2 = undefined;
            avatarURL = getAvatarURL(id1, 80);
            if (tmp5 != null) {
              id2 = tmp5.id;
            }
            obj1 = { dispatchWait: true, guildId: null };
            obj1.guildId = id2;
            tmp4Result = tmp4(id, avatarURL, obj1);
          }
          return;
        }
      }
      cResult[21] = undefined;
      cResult[22] = W;
    }
    let obj2 = {};
    obj2[guildId] = tmp32;
    cResult[17] = guildId;
    cResult[18] = tmp32;
    cResult[19] = obj2;
    const tmpResult7 = tmp(tmp2[10]);
  }
  const obj3 = { user: stateFromStores2, displayProfile: tmp20Result };
  cResult[8] = stateFromStores2;
  cResult[9] = tmp20Result;
  cResult[10] = obj3;
  tmp23 = obj3;
  const tmp20 = stateFromStores1(stateFromStores2[11]);
}) : (function HomeWelcomeMessage(guildId) {
  guildId = guildId.guildId;
  let stateFromStores2;
  let stateFromStores3;
  let tmp = closure_10();
  const items = [UserStore];
  const stateFromStores = guildId(stateFromStores2[10]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = guildId(stateFromStores2[10]);
  const items1 = [GuildOnboardingHomeSettingsStore];
  const stateFromStores1 = guildId(stateFromStores2[10]).useStateFromStores(items1, () => GuildOnboardingHomeSettingsStore.getWelcomeMessage(guildId));
  let obj2 = guildId(stateFromStores2[10]);
  const items2 = [UserStore];
  stateFromStores2 = guildId(stateFromStores2[10]).useStateFromStores(items2, () => {
    let first;
    if (stateFromStores1 != null) {
      first = stateFromStores1.authorIds[0];
    }
    return UserStore.getUser(first);
  });
  let id;
  const obj3 = guildId(stateFromStores2[10]);
  if (stateFromStores2 != null) {
    id = stateFromStores2.id;
  }
  const tmp8 = stateFromStores1(stateFromStores2[11]);
  const tmp8Result = stateFromStores1(stateFromStores2[11])(id, guildId);
  ({ primaryColor, secondaryColor, theme } = stateFromStores1(stateFromStores2[12])({ user: stateFromStores2, displayProfile: stateFromStores1(stateFromStores2[11])(id, guildId) }));
  const tmp11 = stateFromStores1(stateFromStores2[12])({ user: stateFromStores2, displayProfile: stateFromStores1(stateFromStores2[11])(id, guildId) });
  const items3 = [GuildStore];
  stateFromStores3 = guildId(stateFromStores2[10]).useStateFromStores(items3, () => GuildStore.getGuild(guildId));
  const tmp2Result = guildId(stateFromStores2[10]);
  let authorIds;
  if (stateFromStores1 != null) {
    authorIds = stateFromStores1.authorIds;
  }
  if (authorIds == null) {
    authorIds = [];
  }
  const obj4 = {};
  obj4[guildId] = authorIds;
  const subscribeGuildMembers = guildId(stateFromStores2[13]).useSubscribeGuildMembers(obj4, "HomeWelcomeMessage");
  const items4 = [stateFromStores2, stateFromStores3];
  const effect = stateFromStores3.useEffect(() => {
    if (!tmp) {
      let id1;
      ({ id, getAvatarURL } = stateFromStores2);
      if (stateFromStores3 != null) {
        id1 = stateFromStores3.id;
      }
      let id2;
      const avatarURL = getAvatarURL(id1, 80);
      if (stateFromStores3 != null) {
        id2 = stateFromStores3.id;
      }
      const obj2 = { dispatchWait: true, guildId: id2 };
      maybeFetchUserProfileDefault(id, avatarURL, obj2);
    }
    tmp = null == stateFromStores2 || stateFromStores2.isNonUserBot();
  }, items4);
  const tmp2Result4 = guildId(stateFromStores2[13]);
  let username = guildId(stateFromStores2[15]).useName(stateFromStores);
  if (null != stateFromStores1) {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        const items5 = ["#B8CDFF", "#8CD9FF"];
        const obj5 = { theme, primaryColor, secondaryColor, children: null };
        const obj6 = { style: tmp.relativeContainer, children: null };
        if (null != stateFromStores2.avatarDecoration) {
          const items6 = [null, , , ];
          const obj7 = { style: tmp.avatarBackground };
          items6[1] = closure_8(View, obj7);
          const obj8 = { style: tmp.avatar, user: stateFromStores2, size: tmp2(tmp3[18]).AvatarSizes.NORMAL, disableStatus: true };
          items6[2] = closure_8(tmp7(tmp3[17]), obj8);
          const obj9 = { containerStyle: tmp.welcomeContainer, primaryColor, secondaryColor, fallbackBackground: items5, children: null };
          const obj10 = { style: tmp.welcomeContent, children: null };
          const obj11 = { style: tmp.adminUsernameContainer, children: null };
          const tmp7Result = tmp7(tmp3[17]);
          const obj12 = { style: tmp.adminUsername, variant: "text-md/semibold", children: null };
          const tmp7Result3 = tmp7(tmp3[22]);
          obj12.children = tmp7(tmp3[19]).getName(guildId, null, stateFromStores2);
          const items7 = [closure_8(tmp2(tmp3[20]).Text, obj12), ];
          let tmp16Result = null;
          if (tmp15) {
            const obj13 = { size: tmp2(tmp3[18]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.icon, source: tmp7(tmp3[21]), disableColor: true };
            tmp16Result = closure_8(tmp2(tmp3[18]).Icon, obj13);
          }
          items7[1] = tmp16Result;
          obj11.children = items7;
          const items8 = [closure_9(View, obj11), ];
          if (username == null) {
            username = stateFromStores.username;
          }
          const obj14 = { variant: "text-sm/normal", children: replaceUsernameVariable(tmp, stateFromStores1.message, username) };
          items8[1] = closure_8(tmp2(tmp3[20]).Text, obj14);
          obj10.children = items8;
          obj9.children = closure_9(View, obj10);
          items6[3] = closure_8(tmp7Result3, obj9);
          obj6.children = items6;
          obj5.children = closure_9(View, obj6);
          return closure_8(tmp17, obj5);
        } else {
          const items9 = [tmp.avatarBorder, ];
          if (null != primaryColor) {
            let int2rgbaResult = tmp2(tmp3[16]).int2rgba(primaryColor, 1);
            const tmp2Result6 = tmp2(tmp3[16]);
          } else {
            int2rgbaResult = items5[0];
          }
          const obj15 = { style: null };
          const obj16 = { backgroundColor: int2rgbaResult };
          items9[1] = obj16;
          obj15.style = items9;
          closure_8(View, obj15);
        }
        tmp15 = null != stateFromStores3 && stateFromStores3.ownerId === stateFromStores2.id;
      }
    }
  }
  return null;
});