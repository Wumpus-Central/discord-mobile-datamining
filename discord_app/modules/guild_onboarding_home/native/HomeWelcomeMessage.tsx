// === Module 16516: HomeWelcomeMessage ===

// Module 16516 (HomeWelcomeMessage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7858 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5077 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let guildId;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
function replaceUsernameVariable(message, message2, username) {
  let diff;
  const parts = message.split(/\[@username\]/g);
  const items = [];
  let num = 0;
  if (0 < parts.length - 1) {
    do {
      let obj = { variant: "text-sm/normal", style: message.message, children: parts[num] };
      let arr = items.push(metroImportAll(Text_Text.Text, obj, num));
      let push = items.push;
      let obj2 = { variant: "text-sm/bold", style: message.message, children: "@" + username };
      let _HermesInternal = HermesInternal;
      let Text = Text_Text.Text;
      let _HermesInternal2 = HermesInternal;
      let arr2 = push(metroImportAll(Text, obj2, "" + num + "-user"));
      num = num + 1;
      diff = parts.length - 1;
    } while (num < diff);
  }
  const obj3 = { variant: "text-sm/normal", style: message.message, children: parts[parts.length - 1] };
  items.push(metroImportAll(Text_Text.Text, obj3, parts.length));
  return items;
}
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { relativeContainer: { position: "relative" }, welcomeContainer: obj2, welcomeContent: obj3, avatarBackground: size, avatarBorder: size1, avatar: { position: "absolute", top: 0, zIndex: 3, left: 28 }, adminUsernameContainer: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 4, paddingLeft: 44 }, adminUsername: obj4, message: obj5, icon: { marginLeft: 4 } };
obj2 = { marginHorizontal: 12, marginVertical: 16, borderRadius: nativeDefault.radii.sm, padding: 2, display: "flex", flexDirection: "column" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: 12, paddingBottom: 12, paddingTop: 4 };
size = { position: "absolute", zIndex: 2, top: 0, left: 28, width: 40, height: 40, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size1 = { position: "absolute", top: -2, zIndex: -1, left: 26, width: 44, height: 44, borderRadius: nativeDefault.radii.round };
obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
obj5 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let currentUser;
  let stateFromStores2;
  let tmp11;
  let tmp13;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmp = guildId;
  const obj = guildId(stateFromStores2[9]);
  const cResult = obj.c(74);
  guildId = guildId.guildId;
  let tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class C {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(stateFromStores2[10]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, C);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildOnboardingHomeSettingsStore];
    class C {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[2] = items1;
    tmp9 = items1;
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
        return currentUser.getCurrentUser();
      }
    }
    cResult[4] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[4];
  }
  const tmpResult5 = tmp(stateFromStores2[10]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp9, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class C {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[5] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[5];
  }
  let first;
  const tmp15 = cResult[6];
  if (stateFromStores1 != null) {
    first = stateFromStores1.authorIds[0];
  }
  if (tmp15 !== first) {
    let first1;
    if (stateFromStores1 != null) {
      first1 = stateFromStores1.authorIds[0];
    }
    class I {
      constructor() {
        let first;
        const getUser = UserStore.getUser;
        if (stateFromStores1 != null) {
          first = stateFromStores1.authorIds[0];
        }
        return getUser(first);
      }
    }
    class C {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[6] = first1;
    cResult[7] = I;
    tmp17 = I;
  } else {
    tmp17 = cResult[7];
  }
  const tmpResult6 = tmp(stateFromStores2[10]);
  stateFromStores2 = tmpResult6.useStateFromStores(tmp13, tmp17);
  let id;
  const tmp20 = stateFromStores1;
  const tmp21 = stateFromStores1(stateFromStores2[11]);
  if (stateFromStores2 != null) {
    id = stateFromStores2.id;
  }
  const tmp21Result = tmp21(id, guildId);
  if (cResult[8] === stateFromStores2) {
    let tmp24;
    let tmp27;
    if (cResult[9] === tmp21Result) {
      tmp24 = cResult[10];
    }
    const tmp25 = tmp20(stateFromStores2[12])(tmp24);
    class I {
      constructor() {
        let first;
        const getUser = UserStore.getUser;
        if (stateFromStores1 != null) {
          first = stateFromStores1.authorIds[0];
        }
        return getUser(first);
      }
    }
    class C {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    const secondaryColor = tmp25.secondaryColor;
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = ["#B8CDFF", "#8CD9FF"];
      class I {
        constructor() {
          let first;
          const getUser = UserStore.getUser;
          if (stateFromStores1 != null) {
            first = stateFromStores1.authorIds[0];
          }
          return getUser(first);
        }
      }
      class C {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const items4 = [];
      class I {
        constructor() {
          let first;
          const getUser = UserStore.getUser;
          if (stateFromStores1 != null) {
            first = stateFromStores1.authorIds[0];
          }
          return getUser(first);
        }
      }
      class C {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[12] = items4;
      tmp27 = items4;
    } else {
      tmp27 = cResult[12];
    }
    if (cResult[13] !== guildId) {
      class M {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      class I {
        constructor() {
          let first;
          const getUser = UserStore.getUser;
          if (stateFromStores1 != null) {
            first = stateFromStores1.authorIds[0];
          }
          return getUser(first);
        }
      }
      class C {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[14] = M;
    } else {
      class M {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
    }
    const tmpResult7 = tmp(stateFromStores2[10]);
    const stateFromStores3 = tmpResult7.useStateFromStores(tmp27, M);
    const tmp31 = cResult[15];
    if (stateFromStores1 != null) {
      class M {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
    }
    if (tmp31 !== undefined) {
      class M {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      if (stateFromStores1 != null) {
        class M {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      class I {
        constructor() {
          let first;
          const getUser = UserStore.getUser;
          if (stateFromStores1 != null) {
            first = stateFromStores1.authorIds[0];
          }
          return getUser(first);
        }
      }
      class C {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      if (stateFromStores1 != null) {
        class M {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      cResult[15] = tmp35;
      cResult[16] = tmp34;
    } else {
      class M {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
    }
    if (cResult[17] === guildId) {
      class M {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      tmp(stateFromStores2[13]);
      class I {
        constructor() {
          let first;
          const getUser = UserStore.getUser;
          if (stateFromStores1 != null) {
            first = stateFromStores1.authorIds[0];
          }
          return getUser(first);
        }
      }
      class C {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      if (cResult[20] === stateFromStores2) {
        class M {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        class I {
          constructor() {
            let first;
            const getUser = UserStore.getUser;
            if (stateFromStores1 != null) {
              first = stateFromStores1.authorIds[0];
            }
            return getUser(first);
          }
        }
        class C {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        if (cResult[23] === stateFromStores2) {
          class M {
            constructor() {
              return GuildStore.getGuild(guildId);
            }
          }
          class I {
            constructor() {
              let first;
              const getUser = UserStore.getUser;
              if (stateFromStores1 != null) {
                first = stateFromStores1.authorIds[0];
              }
              return getUser(first);
            }
          }
          class C {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          const name = obj8.useName(stateFromStores);
          if (null != stateFromStores1) {
            class M {
              constructor() {
                return GuildStore.getGuild(guildId);
              }
            }
          }
          return null;
        }
        const items5 = [stateFromStores2, stateFromStores3];
        class W {
          constructor() {
            let getAvatarURL;
            let id;
            const tmp = null == stateFromStores2 || stateFromStores2.isNonUserBot();
            if (!tmp) {
              let id1;
              ({ id, getAvatarURL } = stateFromStores2);
              const tmp4 = maybeFetchUserProfileDefault;
              if (stateFromStores3 != null) {
                id1 = stateFromStores3.id;
              }
              let id2;
              const avatarURL = getAvatarURL(id1, 80);
              if (stateFromStores3 != null) {
                id2 = stateFromStores3.id;
              }
              const obj2 = { dispatchWait: true, guildId: id2 };
              tmp4(id, avatarURL, obj2);
            }
          }
        }
        cResult[24] = stateFromStores3;
        cResult[25] = items5;
      }
      cResult[20] = stateFromStores2;
      if (stateFromStores3 != null) {
        class M {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      class W {
        constructor() {
          let getAvatarURL;
          let id;
          const tmp = null == stateFromStores2 || stateFromStores2.isNonUserBot();
          if (!tmp) {
            let id1;
            ({ id, getAvatarURL } = stateFromStores2);
            const tmp4 = maybeFetchUserProfileDefault;
            if (stateFromStores3 != null) {
              id1 = stateFromStores3.id;
            }
            let id2;
            const avatarURL = getAvatarURL(id1, 80);
            if (stateFromStores3 != null) {
              id2 = stateFromStores3.id;
            }
            const obj2 = { dispatchWait: true, guildId: id2 };
            tmp4(id, avatarURL, obj2);
          }
        }
      }
      cResult[21] = undefined;
      cResult[22] = W;
    }
    let obj2 = {};
    obj2[guildId] = tmp34;
    cResult[17] = guildId;
    cResult[18] = tmp34;
    cResult[19] = obj2;
  }
  const obj3 = { user: stateFromStores2, displayProfile: tmp21Result };
  cResult[8] = stateFromStores2;
  cResult[9] = tmp21Result;
  cResult[10] = obj3;
  tmp24 = obj3;
}) : ((guildId) => {
  let currentUser;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj6;
  let primaryColor;
  let secondaryColor;
  let theme;
  let tmp7Result4;
  guildId = guildId.guildId;
  let stateFromStores2;
  let stateFromStores3;
  let tmp = closure_10();
  const items = [UserStore];
  const obj = guildId(stateFromStores2[10]);
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = guildId(stateFromStores2[10]);
  const items1 = [GuildOnboardingHomeSettingsStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildOnboardingHomeSettingsStore.getWelcomeMessage(guildId));
  const items2 = [UserStore];
  const obj3 = guildId(stateFromStores2[10]);
  stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let first;
    const getUser = UserStore.getUser;
    if (stateFromStores1 != null) {
      first = stateFromStores1.authorIds[0];
    }
    return getUser(first);
  });
  let id;
  const tmp8 = stateFromStores1(stateFromStores2[11]);
  if (stateFromStores2 != null) {
    id = stateFromStores2.id;
  }
  const tmp8Result = tmp8(id, guildId);
  ({ primaryColor, secondaryColor, theme } = stateFromStores1(stateFromStores2[12])({ user: stateFromStores2, displayProfile: tmp8Result }));
  stateFromStores1(stateFromStores2[12])({ user: stateFromStores2, displayProfile: tmp8Result });
  const items3 = [GuildStore];
  const tmp2Result = guildId(stateFromStores2[10]);
  stateFromStores3 = tmp2Result.useStateFromStores(items3, () => GuildStore.getGuild(guildId));
  let authorIds;
  const useSubscribeGuildMembers = guildId(stateFromStores2[13]).useSubscribeGuildMembers;
  guildId(stateFromStores2[13]);
  if (stateFromStores1 != null) {
    authorIds = stateFromStores1.authorIds;
  }
  if (authorIds == null) {
    authorIds = [];
  }
  const obj4 = {};
  obj4[guildId] = authorIds;
  const subscribeGuildMembers = useSubscribeGuildMembers(obj4, "HomeWelcomeMessage");
  const items4 = [stateFromStores2, stateFromStores3];
  const effect = stateFromStores3.useEffect(() => {
    let getAvatarURL;
    let id;
    const tmp = null == stateFromStores2 || stateFromStores2.isNonUserBot();
    if (!tmp) {
      let id1;
      ({ id, getAvatarURL } = stateFromStores2);
      const tmp4 = maybeFetchUserProfileDefault;
      if (stateFromStores3 != null) {
        id1 = stateFromStores3.id;
      }
      let id2;
      const avatarURL = getAvatarURL(id1, 80);
      if (stateFromStores3 != null) {
        id2 = stateFromStores3.id;
      }
      const obj2 = { dispatchWait: true, guildId: id2 };
      tmp4(id, avatarURL, obj2);
    }
  }, items4);
  const tmp2Result5 = guildId(stateFromStores2[15]);
  let username = tmp2Result5.useName(stateFromStores);
  if (null != stateFromStores1) {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        const items5 = ["#B8CDFF", "#8CD9FF"];
        const obj5 = { theme, primaryColor, secondaryColor, children: closure_9(View, obj6) };
        let tmp17Result = null;
        obj6 = { style: tmp.relativeContainer, children: items7 };
        const tmp16 = null != stateFromStores3 && stateFromStores3.ownerId === stateFromStores2.id;
        const ThemeContextProvider = tmp2(tmp3[23]).ThemeContextProvider;
        if (null == stateFromStores2.avatarDecoration) {
          let int2rgbaResult;
          const items6 = [tmp.avatarBorder, ];
          if (null != primaryColor) {
            const tmp2Result6 = guildId(stateFromStores2[16]);
            int2rgbaResult = tmp2Result6.int2rgba(primaryColor, 1);
          } else {
            int2rgbaResult = items5[0];
          }
          const obj7 = { style: items6 };
          const obj8 = { backgroundColor: int2rgbaResult };
          items6[1] = obj8;
          tmp17Result = closure_8(View, obj7);
        }
        items7 = [tmp17Result, , , ];
        const obj9 = { style: tmp.avatarBackground };
        items7[1] = closure_8(View, obj9);
        const obj10 = { style: tmp.avatar, user: stateFromStores2, size: guildId(stateFromStores2[18]).AvatarSizes.NORMAL, disableStatus: true };
        const tmp7Result = stateFromStores1(stateFromStores2[17]);
        items7[2] = closure_8(tmp7Result, obj10);
        const obj11 = { containerStyle: tmp.welcomeContainer, primaryColor, secondaryColor, fallbackBackground: items5, children: closure_9(View, obj12) };
        obj12 = { style: tmp.welcomeContent, children: items9 };
        const obj13 = { style: tmp.adminUsernameContainer, children: items8 };
        const obj14 = { style: tmp.adminUsername, variant: "text-md/semibold", children: tmp7Result4.getName(guildId, null, stateFromStores2) };
        const tmp7Result3 = stateFromStores1(stateFromStores2[22]);
        const Text = tmp2(tmp3[20]).Text;
        tmp7Result4 = stateFromStores1(stateFromStores2[19]);
        items8 = [closure_8(Text, obj14), ];
        let tmp17Result2 = null;
        if (tmp16) {
          const obj15 = { size: guildId(stateFromStores2[18]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.icon, source: stateFromStores1(stateFromStores2[21]), disableColor: true };
          const Icon = tmp2(tmp3[18]).Icon;
          tmp17Result2 = closure_8(Icon, obj15);
        }
        items8[1] = tmp17Result2;
        items9 = [closure_9(View, obj13), ];
        const Text2 = tmp2(tmp3[20]).Text;
        const message = stateFromStores1.message;
        if (username == null) {
          username = stateFromStores.username;
        }
        const obj16 = { variant: "text-sm/normal", children: replaceUsernameVariable(tmp, message, username) };
        items9[1] = closure_8(Text2, obj16);
        items7[3] = closure_8(tmp7Result3, obj11);
        return closure_8(ThemeContextProvider, obj5);
      }
    }
  }
  return null;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx");

export default tmp4;