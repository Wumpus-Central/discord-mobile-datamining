// === Module 14504: GuildInviteActionSheet ===

// Module 14504 (GuildInviteActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import native from "native" /* 1199 */;
import Text_Text from "Text/Text" /* 5270 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5301 */;
import Search_SearchBar from "Search/SearchBar" /* 7181 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7284 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9085 */;
import _modDef14505 from "module_14505" /* 14505 */;
import _modDef14506 from "module_14506" /* 14506 */;
import GuildInviteRowDefault from "GuildInviteRow" /* 14507 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5004);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, searchbarWrapper: null, sectionTitle: null, emptyStateContainer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.searchbarWrapper = { rowGap: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { rowGap: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.sectionTitle = { paddingBottom: 6, paddingTop: 24, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.emptyStateContainer = { margin: 24 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const ListEmptyComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyGuildList() {
  const cResult = c.c(4);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["2bfiLk"]);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.V6nAfF);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.emptyStateContainer) {
    const obj2 = { containerStyle: tmp4.emptyStateContainer, title: tmp5, body: tmp6, darkSource: _modDef14505, lightSource: _modDef14506 };
    const tmp12 = timestampProducer(native.ThemedEmptyState, obj2);
    cResult[2] = tmp4.emptyStateContainer;
    cResult[3] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (function EmptyGuildList() {
  const obj = { containerStyle: closure_8().emptyStateContainer, title: null, body: null, darkSource: null, lightSource: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["2bfiLk"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.V6nAfF);
  obj.darkSource = _modDef14505;
  obj.lightSource = _modDef14506;
  return timestampProducer(native.ThemedEmptyState, obj);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildList(recipientId) {
  const cResult = recipientId(576).c(21);
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  const tmp4 = closure_8();
  dependencyMap = tmp4;
  let obj = recipientId(576);
  let num = 2;
  const obj2 = recipientId(14502);
  [arr, arr2] = recipientId(14502).useServerInviteRows(recipientId, recipientId.query);
  if (cResult[0] === (0 === arr.length && 0 === arr2.length)) {
    if (cResult[1] === arr) {
      if (cResult[2] === arr2) {
        if (cResult[4] === recipientId) {
          if (cResult[5] === source) {
            let tmp10 = cResult[6];
          }
          if (cResult[7] !== tmp4) {
            function renderSectionHeader(data) {
              let tmp = null;
              if (data.data.length > 0) {
                const obj = { style: sectionTitle.sectionTitle, variant: "text-sm/semibold", color: "text-default", children: data.title };
                tmp = timestampProducer(Text_Text.Text, obj);
              }
              return tmp;
            }
            cResult[7] = tmp4;
            cResult[8] = renderSectionHeader;
            let tmp12 = renderSectionHeader;
          } else {
            tmp12 = cResult[8];
          }
          _slicedToArray = tmp12;
          let tmp14 = 0 === arr.length;
          if (!tmp14) {
            tmp14 = 0 === arr2.length;
          }
          closure_4 = tmp14;
          let num7 = 0;
          if (tmp14) {
            num7 = 24;
          }
          const sum = source(5629)().insets.bottom + source(587).space.PX_16;
          if (cResult[9] === num7) {
            if (cResult[10] === sum) {
              let tmp16 = cResult[11];
            }
            if (cResult[12] === tmp14) {
              if (cResult[13] === tmp12) {
                let tmp17 = cResult[14];
              }
              class A {
                constructor(arg0) {
                  tmp2 = null;
                  if (!closure_4) {
                    tmp3 = closure_3;
                    tmp2 = closure_3(tmp);
                  }
                  return tmp2;
                }
              }
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class B {
                  constructor(arg0) {
                    return recipientId.guild.id;
                  }
                }
                class A {
                  constructor(arg0) {
                    tmp2 = null;
                    if (!closure_4) {
                      tmp3 = closure_3;
                      tmp2 = closure_3(tmp);
                    }
                    return tmp2;
                  }
                }
              } else {
                class B {
                  constructor(arg0) {
                    return recipientId.guild.id;
                  }
                }
              }
              if (cResult[16] === tmp10) {
                class B {
                  constructor(arg0) {
                    return recipientId.guild.id;
                  }
                }
              }
              const obj3 = { renderItem: tmp10, contentContainerStyle: tmp16, sections: tmp7, renderSectionHeader: tmp17, stickySectionHeadersEnabled: true, keyExtractor: B, ListEmptyComponent };
              const tmp23 = closure_6(tmp(11115).UserProfileStackedActionSheetSectionList, obj3);
              cResult[16] = tmp10;
              cResult[17] = tmp7;
              cResult[18] = tmp16;
              cResult[19] = tmp17;
              cResult[20] = tmp23;
            }
            class A {
              constructor(arg0) {
                tmp2 = null;
                if (!closure_4) {
                  tmp3 = closure_3;
                  tmp2 = closure_3(tmp);
                }
                return tmp2;
              }
            }
            cResult[12] = tmp14;
            cResult[13] = tmp12;
            cResult[14] = A;
            tmp17 = A;
          }
          const obj4 = { paddingTop: num7, paddingBottom: sum };
          cResult[9] = num7;
          cResult[10] = sum;
          cResult[11] = obj4;
          tmp16 = obj4;
        }
        cResult[4] = recipientId;
        cResult[5] = source;
        cResult[6] = tmp11;
        tmp10 = tmp11;
      }
    }
  }
  if (0 === arr.length && 0 === arr2.length) {
    class B {
      constructor(arg0) {
        return recipientId.guild.id;
      }
    }
  } else {
    class B {
      constructor(arg0) {
        return recipientId.guild.id;
      }
    }
    class A {
      constructor(arg0) {
        tmp2 = null;
        if (!closure_4) {
          tmp3 = closure_3;
          tmp2 = closure_3(tmp);
        }
        return tmp2;
      }
    }
    tmp8[0] = tmp9(tmp(1125).t["u+Ithu"]);
    tmp8[1] = arr;
    const items = [tmp8, ];
    const obj5 = { title: null, data: null };
    const intl = tmp(1125).intl;
    obj5.title = intl.string(tmp(1125).t["c5T+X/"]);
    obj5.data = arr2;
    items[1] = obj5;
  }
  cResult[0] = 0 === arr.length && 0 === arr2.length;
  cResult[1] = arr;
  cResult[num] = arr2;
  num = 3;
  cResult[3] = items;
  const tmp5 = _slicedToArray(recipientId(14502).useServerInviteRows(recipientId, recipientId.query), 2);
}) : (function GuildList(recipientId) {
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  _slicedToArray = undefined;
  dependencyMap = closure_8();
  let obj = recipientId(14502);
  [arr, arr2] = recipientId(14502).useServerInviteRows(recipientId, recipientId.query);
  if (0 === arr.length) {
    if (0 === arr2.length) {
      let items = [];
    }
    let tmp5 = 0 === arr.length;
    if (!tmp5) {
      tmp5 = 0 === arr2.length;
    }
    _slicedToArray = tmp5;
    const obj2 = {
      renderItem(arg0) {
          ({ item, start, end } = arg0);
          return timestampProducer(GuildInviteRowDefault, { row: item, recipientId, source, start, end });
        },
      contentContainerStyle: null,
      sections: null,
      renderSectionHeader: null,
      stickySectionHeadersEnabled: true,
      keyExtractor: null,
      ListEmptyComponent: null
    };
    let num = 0;
    if (tmp5) {
      num = 24;
    }
    const obj3 = { paddingTop: num, paddingBottom: source(5629)().insets.bottom + source(587).space.PX_16 };
    obj2.contentContainerStyle = obj3;
    obj2.sections = items;
    obj2.renderSectionHeader = function renderSectionHeader(section) {
      section = section.section;
      let tmp = null;
      if (!closure_3) {
        let tmp2 = null;
        if (section.data.length > 0) {
          const obj = { style: sectionTitle.sectionTitle, variant: "text-sm/semibold", color: "text-default", children: section.title };
          tmp2 = timestampProducer(Text_Text.Text, obj);
        }
        tmp = tmp2;
      }
      return tmp;
    };
    obj2.keyExtractor = function keyExtractor(guild) {
      return guild.guild.id;
    };
    obj2.ListEmptyComponent = ListEmptyComponent;
    return closure_6(tmp(11115).UserProfileStackedActionSheetSectionList, obj2);
  }
  const obj4 = { title: null, data: null };
  const intl = tmp(1125).intl;
  obj4.title = intl.string(recipientId(1125).t["u+Ithu"]);
  obj4.data = arr;
  items = [obj4, ];
  const obj5 = { title: null, data: null };
  const intl2 = tmp(1125).intl;
  obj5.title = intl2.string(recipientId(1125).t["c5T+X/"]);
  obj5.data = arr2;
  items[1] = obj5;
  const tmp3 = _slicedToArray(recipientId(14502).useServerInviteRows(recipientId, recipientId.query), 2);
});
ReactCompilerGating = fn(558);
let obj5 = { paddingBottom: 6, paddingTop: 24, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildInviteActionSheet(arg0) {
  const cResult = c.c(14);
  ({ recipientId, source } = arg0);
  const tmp4 = closure_8();
  [tmp6, require] = noop.useState("");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handleQueryChange(arg0) {
      require(arg0);
    }
    cResult[0] = handleQueryChange;
    let first = handleQueryChange;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.HvoZQD);
    const tmp10 = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
    cResult[1] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { onChange: first, placeholder: null };
    const intl2 = util.intl;
    obj3.placeholder = intl2.string(util.t.uohsSv);
    const tmp13 = timestampProducer(Search_SearchBar.SearchBar, obj3);
    cResult[2] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl3 = util.intl;
    const obj5 = { xDays: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.label };
    obj4.children = intl3.format(util.t["4UyUHh"], obj5);
    const tmp17 = timestampProducer(Text_Text.Text, obj4);
    cResult[3] = tmp17;
    let tmp14 = tmp17;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== tmp4.searchbarWrapper) {
    const obj6 = { style: tmp4.searchbarWrapper, children: null };
    const items = [tmp11, tmp14];
    obj6.children = items;
    const tmp21 = React5(View, obj6);
    cResult[4] = tmp4.searchbarWrapper;
    cResult[5] = tmp21;
    let tmp18 = tmp21;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] === tmp6) {
    if (cResult[7] === recipientId) {
      if (cResult[8] === source) {
        let tmp22 = cResult[9];
      }
      if (cResult[10] === tmp4.content) {
        if (cResult[11] === tmp18) {
          if (cResult[12] === tmp22) {
            let tmp24 = cResult[13];
          }
          return tmp24;
        }
      }
      const obj7 = { scrollable: true, startExpanded: true, header: tmp8, contentStyles: tmp4.content, children: null };
      const items1 = [tmp18, tmp22];
      obj7.children = items1;
      const tmp26 = React5(Sheet_BottomSheet.BottomSheet, obj7);
      cResult[10] = tmp4.content;
      cResult[11] = tmp18;
      cResult[12] = tmp22;
      cResult[13] = tmp26;
      tmp24 = tmp26;
    }
  }
  const tmp23 = timestampProducer(closure_10, { query: tmp6, recipientId, source });
  cResult[6] = tmp6;
  cResult[7] = recipientId;
  cResult[8] = source;
  cResult[9] = tmp23;
  tmp22 = tmp23;
  const tmp5 = _slicedToArray(noop.useState(""), 2);
}) : (function GuildInviteActionSheet(arg0) {
  ({ recipientId, source } = arg0);
  const tmp = closure_8();
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  closure_0 = tmp2[1];
  const obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.HvoZQD);
  const obj2 = { scrollable: true, startExpanded: true, header: timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), contentStyles: tmp.content, children: null };
  const obj3 = { style: tmp.searchbarWrapper, children: null };
  const obj4 = {
    onChange: function handleQueryChange(arg0) {
      closure_0(arg0);
    },
    placeholder: null
  };
  const intl2 = util.intl;
  obj4.placeholder = intl2.string(util.t.uohsSv);
  const items = [timestampProducer(Search_SearchBar.SearchBar, obj4), ];
  const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl3 = util.intl;
  const tmp3 = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj5.children = intl3.format(util.t["4UyUHh"], { xDays: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.label });
  items[1] = timestampProducer(Text_Text.Text, obj5);
  obj3.children = items;
  const items1 = [React5(View, obj3), timestampProducer(closure_10, { query: tmp2[0], recipientId, source })];
  obj2.children = items1;
  return React5(Sheet_BottomSheet.BottomSheet, obj2);
});