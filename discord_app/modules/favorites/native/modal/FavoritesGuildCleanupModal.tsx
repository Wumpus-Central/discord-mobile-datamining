// discord_app/modules/favorites/native/modal/FavoritesGuildCleanupModal.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3413 from "../../intl/FavoritesGuild.messages.js";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import TableCheckboxRow from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import Modal from "../../../../design/components/Modal/native/Modal.native.tsx";
import useFavoritesCleanupActivityDefault from "../../hooks/useFavoritesCleanupActivity.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function closeCleanup() {
  ModalActionCreatorsDefault.popWithKey("FavoritesGuildCleanupModal");
}
get_ActivityIndicator = fn(17);
({ Keyboard: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4972);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = {
    container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
    scroller: { flex: 1 },
    content: null,
    actions: null,
  };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.content = { padding: nativeDefault.space.PX_16 };
  const obj3 = { padding: nativeDefault.space.PX_16 };
  obj.actions = { padding: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CleanupScreen() {
      const cResult = require("c").c(44);
      const tmp5 = closure_9(stage(loading[8])().bottom);
      const tmp6 = stage(loading[9])(closeCleanup);
      _require = tmp6;
      stage = tmp6.stage;
      loading = tmp6.loading;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-md/normal", children: null };
        const intl = tmp(tmp2[11]).intl;
        obj2.children = intl.string(tmp4(tmp2[12]).DbeF7Y);
        const tmp9 = closure_6(tmp(tmp2[10]).Text, obj2);
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tmp6) {
        if (cResult[2] === length) {
          if (cResult[3] === loading) {
            if (cResult[4] === stage) {
              if (cResult[6] !== tmp6.error) {
                let tmp24 = null;
                if (tmp6.error) {
                  const obj3 = {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    accessibilityRole: "alert",
                    children: null,
                  };
                  const intl8 = tmp(tmp2[11]).intl;
                  obj3.children = intl8.string(tmp4(tmp2[12]).toOYQw);
                  tmp24 = closure_6(tmp(tmp2[10]).Text, obj3);
                }
                cResult[6] = tmp6.error;
                cResult[7] = tmp24;
                let tmp23 = tmp24;
              } else {
                tmp23 = cResult[7];
              }
              if (cResult[8] === cResult[5]) {
                if (cResult[9] === tmp23) {
                  let tmp26 = cResult[10];
                }
                if (cResult[11] === tmp5.content) {
                  if (cResult[12] === tmp5.scroller) {
                    if (cResult[15] === length) {
                      if (cResult[16] === stage) {
                        let str4 = "primary";
                        if ("review" === stage) {
                          str4 = "destructive";
                        }
                        if (loading) {
                          if (cResult[18] === tmp6) {
                            if (cResult[19] === stage) {
                              let tmp41 = cResult[20];
                            }
                            class I {
                              constructor() {
                                dismissResult = Keyboard.dismiss();
                                if ("filter" === stage) {
                                  tmp4 = closure_0;
                                  reviewResult = closure_0.review();
                                } else {
                                  tmp2 = closure_0;
                                  removeResult = closure_0.remove();
                                }
                                return;
                              }
                            }
                            const obj4 = { text: tmp33, variant: str4, disabled: loading, loading, onPress: tmp41 };
                            const tmp44 = closure_6(tmp(tmp2[17]).Button, obj4);
                            cResult[21] = loading;
                            cResult[22] = tmp41;
                            cResult[23] = tmp33;
                            cResult[24] = str4;
                            cResult[25] = loading;
                            cResult[26] = tmp44;
                          }
                          class I {
                            constructor() {
                              dismissResult = Keyboard.dismiss();
                              if ("filter" === stage) {
                                tmp4 = closure_0;
                                reviewResult = closure_0.review();
                              } else {
                                tmp2 = closure_0;
                                removeResult = closure_0.remove();
                              }
                              return;
                            }
                          }
                          cResult[18] = tmp6;
                          cResult[19] = stage;
                          cResult[20] = I;
                          tmp41 = I;
                        } else {
                          class I {
                            constructor() {
                              dismissResult = Keyboard.dismiss();
                              if ("filter" === stage) {
                                tmp4 = closure_0;
                                reviewResult = closure_0.review();
                              } else {
                                tmp2 = closure_0;
                                removeResult = closure_0.remove();
                              }
                              return;
                            }
                          }
                        }
                      }
                    }
                    if ("filter" === stage) {
                      class I {
                        constructor() {
                          dismissResult = Keyboard.dismiss();
                          if ("filter" === stage) {
                            tmp4 = closure_0;
                            reviewResult = closure_0.review();
                          } else {
                            tmp2 = closure_0;
                            removeResult = closure_0.remove();
                          }
                          return;
                        }
                      }
                      let tmp34Result = tmp36(tmp4(tmp2[12]).zAljrZ);
                    } else {
                      class I {
                        constructor() {
                          dismissResult = Keyboard.dismiss();
                          if ("filter" === stage) {
                            tmp4 = closure_0;
                            reviewResult = closure_0.review();
                          } else {
                            tmp2 = closure_0;
                            removeResult = closure_0.remove();
                          }
                          return;
                        }
                      }
                      const obj5 = { count: length };
                      tmp34Result = tmp34(tmp4(tmp2[12]).jiqJtj, obj5);
                    }
                    cResult[15] = length;
                    cResult[16] = stage;
                    cResult[17] = tmp34Result;
                  }
                }
                const obj6 = {
                  style: null,
                  contentContainerStyle: null,
                  keyboardShouldPersistTaps: "handled",
                  children: null,
                };
                ({ scroller: obj15.style, content: obj15.contentContainerStyle } = tmp5);
                obj6.children = tmp26;
                const tmp32 = closure_6(closure_5, obj6);
                cResult[11] = tmp5.content;
                cResult[12] = tmp5.scroller;
                cResult[13] = tmp26;
                cResult[14] = tmp32;
              }
              const obj7 = { spacing: tmp4(tmp2[4]).space.PX_16, children: null };
              let items = [first, cResult[5], tmp23];
              obj7.children = items;
              const tmp28 = closure_7(tmp(tmp2[16]).Stack, obj7);
              cResult[8] = cResult[5];
              cResult[9] = tmp23;
              cResult[10] = tmp28;
              tmp26 = tmp28;
            }
          }
        }
      }
      if ("filter" === stage) {
        class I {
          constructor() {
            dismissResult = Keyboard.dismiss();
            if ("filter" === stage) {
              tmp4 = closure_0;
              reviewResult = closure_0.review();
            } else {
              tmp2 = closure_0;
              removeResult = closure_0.remove();
            }
            return;
          }
        }
        const intl5 = tmp(tmp2[11]).intl;
        tmp19[0] = intl5.string(tmp4(tmp2[12]).VheZQr);
        ({ days: tmp19[1], setDays: tmp19[2] } = tmp6);
        tmp19[5] = loading;
        if ("" !== tmp6.days) {
          class I {
            constructor() {
              dismissResult = Keyboard.dismiss();
              if ("filter" === stage) {
                tmp4 = closure_0;
                reviewResult = closure_0.review();
              } else {
                tmp2 = closure_0;
                removeResult = closure_0.remove();
              }
              return;
            }
          }
        }
        tmp19[6] = undefined;
        const items1 = [closure_6(tmp(tmp2[13]).TextInput, tmp19)];
        const obj8 = { title: null, hasIcons: false, value: null, onChange: null, children: null };
        const intl6 = tmp(tmp2[11]).intl;
        obj8.title = intl6.string(tmp4(tmp2[12]).KIzpqi);
        let str2 = tmp6.categoryId;
        if (str2 == null) {
          str2 = "all";
        }
        const obj9 = { children: null };
        obj8.value = str2;
        obj8.onChange = function onChange(arg0) {
          let tmp2 = null;
          if ("all" !== arg0) {
            tmp2 = arg0;
          }
          return closure_0.setCategoryId(tmp2);
        };
        const obj10 = { label: null, value: "all", disabled: null };
        const intl7 = tmp(tmp2[11]).intl;
        obj10.label = intl7.string(tmp4(tmp2[12])["gOUr+P"]);
        obj10.disabled = loading;
        const items2 = [closure_6(tmp(tmp2[15]).TableRadioRow, obj10)];
        const categories = tmp6.categories;
        items2[1] = categories.map((label) =>
          timestampProducer(
            TableRadioRow.TableRadioRow,
            { label: label.name, value: label.id, disabled: loading },
            label.id,
          ),
        );
        obj8.children = items2;
        items1[1] = closure_7(tmp(tmp2[14]).TableRadioGroup, obj8);
        obj9.children = items1;
        let obj35 = obj9;
      } else {
        class I {
          constructor() {
            dismissResult = Keyboard.dismiss();
            if ("filter" === stage) {
              tmp4 = closure_0;
              reviewResult = closure_0.review();
            } else {
              tmp2 = closure_0;
              removeResult = closure_0.remove();
            }
            return;
          }
        }
        const intl9 = tmp(tmp2[11]).intl;
        const obj11 = { count: length };
        tmp46[2] = intl9.format(tmp4(tmp2[12]).kdvwuo, obj11);
        const items3 = [closure_6(tmp(tmp2[10]).Text, tmp46), ,];
        if (tmp6.candidates.length > 0) {
          const obj12 = { spacing: null, children: null };
          class I {
            constructor() {
              dismissResult = Keyboard.dismiss();
              if ("filter" === stage) {
                tmp4 = closure_0;
                reviewResult = closure_0.review();
              } else {
                tmp2 = closure_0;
                removeResult = closure_0.remove();
              }
              return;
            }
          }
          obj12.spacing = tmp4(tmp2[4]).space.PX_8;
          let Button = tmp(tmp2[17]).Button;
          let map = tmp(tmp2[11]).intl;
          let string = map.string;
          let items4 = tmp4(tmp2[12]);
          const obj13 = {
            text: string(tmp6.allSelected ? items4.AX7Fmc : items4.ZuaHVJ),
            variant: "tertiary",
            size: "sm",
            disabled: loading,
            onPress: tmp6.toggleSelection,
          };
          items4 = [closure_6(Button, obj13)];
          const obj14 = { title: null, hasIcons: false, children: null };
          const intl3 = tmp(tmp2[11]).intl;
          obj14.title = intl3.string(tmp4(tmp2[12]).wPednI);
          const candidates = tmp6.candidates;
          map = candidates.map;
          string = map((channel) => {
            let selectedIds = channel;
            const obj = {
              channel,
              checked: null,
              disabled: loading,
              onChange(arg0) {
                selectedIds = arg0;
                return selectedIds.setSelectedIds((arr) => {
                  if (id) {
                    const items = [];
                    items[HermesBuiltin.arraySpread(arr, 0)] = id.id;
                    let found = items;
                  } else {
                    found = arr.filter((item) => item !== id.id);
                  }
                  return found;
                });
              },
            };
            selectedIds = selectedIds.selectedIds;
            obj.checked = selectedIds.includes(channel.id);
            return closure_1_6(closure_1_12, obj, channel.id);
          });
          obj14.children = string;
          Button = closure_6(tmp(tmp2[18]).TableRowGroup, obj14);
          items4[1] = Button;
          obj12.children = items4;
          closure_7(tmp14, obj12);
        } else {
          const obj16 = { variant: "text-md/normal", children: null };
          class I {
            constructor() {
              dismissResult = Keyboard.dismiss();
              if ("filter" === stage) {
                tmp4 = closure_0;
                reviewResult = closure_0.review();
              } else {
                tmp2 = closure_0;
                removeResult = closure_0.remove();
              }
              return;
            }
          }
          const intl2 = tmp(tmp2[11]).intl;
          obj16.children = intl2.string(tmp4(tmp2[12])["4KOdCv"]);
          items3[1] = closure_6(tmp13, obj16);
          let tmp45Result = null;
          if (tmp6.unknownCount > 0) {
            const obj17 = { variant: "text-sm/normal", children: null };
            class I {
              constructor() {
                dismissResult = Keyboard.dismiss();
                if ("filter" === stage) {
                  tmp4 = closure_0;
                  reviewResult = closure_0.review();
                } else {
                  tmp2 = closure_0;
                  removeResult = closure_0.remove();
                }
                return;
              }
            }
            const intl4 = tmp(tmp2[11]).intl;
            const obj18 = { count: tmp6.unknownCount };
            obj17.children = intl4.format(tmp4(tmp2[12])["rM/wWh"], obj18);
            tmp45Result = closure_6(tmp17, obj17);
          }
          obj35 = { children: null };
          items3[2] = tmp45Result;
          obj35.children = items3;
        }
      }
      let obj = require("c");
      cResult[1] = tmp6;
      cResult[2] = tmp6.selectedThreads.length;
      cResult[3] = loading;
      cResult[4] = stage;
      cResult[5] = closure_7(closure_8, obj35);
      const tmp11Result2 = closure_7(closure_8, obj35);
    }
  : function CleanupScreen() {
      const tmp3 = closure_9(stage(loading[8])().bottom);
      let validDays = stage(loading[9])(closeCleanup);
      stage = validDays.stage;
      loading = validDays.loading;
      let obj = { style: tmp3.container, spacing: 0, children: null };
      const obj2 = {
        style: tmp3.scroller,
        contentContainerStyle: tmp3.content,
        keyboardShouldPersistTaps: "handled",
        children: null,
      };
      const obj3 = { spacing: stage(loading[4]).space.PX_16, children: null };
      const obj4 = { variant: "text-md/normal", children: null };
      const intl = validDays(loading[11]).intl;
      obj4.children = intl.string(stage(loading[12]).DbeF7Y);
      let items = [closure_6(validDays(loading[10]).Text, obj4), ,];
      const obj5 = { children: null };
      if ("filter" === stage) {
        const obj6 = {
          label: null,
          value: null,
          onChange: null,
          keyboardType: "number-pad",
          maxLength: 5,
          disabled: null,
          errorMessage: null,
        };
        const intl6 = tmp5(tmp2[11]).intl;
        obj6.label = intl6.string(tmp(tmp2[12]).VheZQr);
        ({ days: obj14.value, setDays: obj14.onChange } = validDays);
        obj6.disabled = loading;
        let stringResult;
        if ("" !== validDays.days) {
          if (!validDays.validDays) {
            const intl7 = tmp5(tmp2[11]).intl;
            stringResult = intl7.string(tmp(tmp2[12])["wT+K51"]);
          }
        }
        obj6.errorMessage = stringResult;
        const items1 = [closure_6(tmp5(tmp2[13]).TextInput, obj6)];
        const obj7 = { title: null, hasIcons: false, value: null, onChange: null, children: null };
        const intl8 = tmp5(tmp2[11]).intl;
        obj7.title = intl8.string(tmp(tmp2[12]).KIzpqi);
        let str2 = validDays.categoryId;
        if (str2 == null) {
          str2 = "all";
        }
        obj7.value = str2;
        obj7.onChange = function onChange(arg0) {
          let tmp2 = null;
          if ("all" !== arg0) {
            tmp2 = arg0;
          }
          return validDays.setCategoryId(tmp2);
        };
        const obj8 = { label: null, value: "all", disabled: null };
        const intl9 = tmp5(tmp2[11]).intl;
        obj8.label = intl9.string(tmp(tmp2[12])["gOUr+P"]);
        obj8.disabled = loading;
        const items2 = [closure_6(tmp5(tmp2[15]).TableRadioRow, obj8)];
        const categories = validDays.categories;
        items2[1] = categories.map((label) =>
          timestampProducer(
            TableRadioRow.TableRadioRow,
            { label: label.name, value: label.id, disabled: loading },
            label.id,
          ),
        );
        obj7.children = items2;
        items1[1] = closure_7(tmp5(tmp2[14]).TableRadioGroup, obj7);
        obj5.children = items1;
        let tmp12 = obj5;
      } else {
        const obj9 = { variant: "text-sm/medium", accessibilityLiveRegion: "polite", children: null };
        const intl2 = tmp5(tmp2[11]).intl;
        const obj10 = { count: length };
        obj9.children = intl2.format(tmp(tmp2[12]).kdvwuo, obj10);
        const items3 = [closure_6(tmp5(tmp2[10]).Text, obj9), ,];
        if (validDays.candidates.length > 0) {
          const obj11 = { spacing: tmp(tmp2[4]).space.PX_8, children: null };
          let Button = tmp5(tmp2[17]).Button;
          let map = tmp5(tmp2[11]).intl;
          let string = map.string;
          let items6 = tmp(tmp2[12]);
          const obj12 = {
            text: string(validDays.allSelected ? items6.AX7Fmc : items6.ZuaHVJ),
            variant: "tertiary",
            size: "sm",
            disabled: loading,
            onPress: validDays.toggleSelection,
          };
          items6 = [closure_6(Button, obj12)];
          const obj13 = { title: null, hasIcons: false, children: null };
          const intl4 = tmp5(tmp2[11]).intl;
          obj13.title = intl4.string(tmp(tmp2[12]).wPednI);
          const candidates = validDays.candidates;
          map = candidates.map;
          string = map((channel) => {
            validDays = channel;
            const obj = {
              channel,
              checked: null,
              disabled: loading,
              onChange(arg0) {
                selectedIds = arg0;
                return selectedIds.setSelectedIds((arr) => {
                  if (id) {
                    const items = [];
                    items[HermesBuiltin.arraySpread(arr, 0)] = id.id;
                    let found = items;
                  } else {
                    found = arr.filter((item) => item !== id.id);
                  }
                  return found;
                });
              },
            };
            let selectedIds = validDays.selectedIds;
            obj.checked = selectedIds.includes(channel.id);
            return closure_1_6(closure_1_12, obj, channel.id);
          });
          obj13.children = string;
          Button = closure_6(tmp5(tmp2[18]).TableRowGroup, obj13);
          items6[1] = Button;
          obj11.children = items6;
          closure_7(tmp5(tmp2[16]).Stack, obj11);
        } else {
          const obj15 = { variant: "text-md/normal", children: null };
          const intl3 = tmp5(tmp2[11]).intl;
          obj15.children = intl3.string(tmp(tmp2[12])["4KOdCv"]);
          items3[1] = closure_6(tmp5(tmp2[10]).Text, obj15);
          let tmp6Result = null;
          if (validDays.unknownCount > 0) {
            const obj16 = { variant: "text-sm/normal", children: null };
            const intl5 = tmp5(tmp2[11]).intl;
            const obj17 = { count: validDays.unknownCount };
            obj16.children = intl5.format(tmp(tmp2[12])["rM/wWh"], obj17);
            tmp6Result = closure_6(tmp5(tmp2[10]).Text, obj16);
          }
          items3[2] = tmp6Result;
          obj5.children = items3;
          tmp12 = obj5;
        }
      }
      items[1] = closure_7(closure_8, tmp12);
      let tmp6Result2 = null;
      if (validDays.error) {
        const obj18 = {
          variant: "text-sm/normal",
          color: "text-feedback-critical",
          accessibilityRole: "alert",
          children: null,
        };
        const intl10 = tmp5(tmp2[11]).intl;
        obj18.children = intl10.string(tmp(tmp2[12]).toOYQw);
        tmp6Result2 = closure_6(tmp5(tmp2[10]).Text, obj18);
      }
      items[2] = tmp6Result2;
      obj3.children = items;
      obj2.children = closure_7(validDays(loading[16]).Stack, obj3);
      const items4 = [closure_6(closure_5, obj2)];
      const obj19 = { style: tmp3.actions, spacing: stage(loading[4]).space.PX_8, children: null };
      const intl11 = tmp5(tmp2[11]).intl;
      if ("filter" === stage) {
        let stringResult1 = intl11.string(tmp(tmp2[12]).zAljrZ);
      } else {
        const obj20 = { count: length };
        stringResult1 = intl11.formatToPlainString(tmp(tmp2[12]).jiqJtj, obj20);
      }
      const obj21 = { text: stringResult1, variant: null, disabled: null, loading: null, onPress: null };
      let str3 = "primary";
      if ("review" === stage) {
        str3 = "destructive";
      }
      obj21.variant = str3;
      if (loading) {
        obj21.disabled = loading;
        obj21.loading = loading;
        obj21.onPress = function onPress() {
          React4.dismiss();
          if ("filter" === stage) {
            validDays.review();
          } else {
            validDays.remove();
          }
        };
        const items5 = [closure_6(tmp5(tmp2[17]).Button, obj21)];
        const intl12 = tmp5(tmp2[11]).intl;
        const t = tmp5(tmp2[11]).t;
        const obj41 = {
          text: intl12.string(tmp9 ? t["ETE/oC"] : t["13/7kX"]),
          variant: "secondary",
          disabled: loading,
          onPress() {
            if ("filter" === stage) {
              ModalActionCreatorsDefault.popWithKey("FavoritesGuildCleanupModal");
            } else {
              validDays.setStage("filter");
            }
          },
        };
        items5[1] = closure_6(tmp5(tmp2[17]).Button, obj41);
        obj19.children = items5;
        items4[1] = closure_7(tmp5(tmp2[16]).Stack, obj19);
        obj.children = items4;
        return closure_7(validDays(loading[16]).Stack, obj);
      } else if (tmp9) {
        validDays = validDays.validDays;
        let tmp17 = !validDays;
      } else {
        tmp17 = 0 === length;
      }
    };
fn(558);
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CleanupCandidateRow(arg0) {
      const cResult = c.c(6);
      ({ channel, checked, disabled, onChange } = arg0);
      const tmp4 = useChannelNameDefault(channel);
      const tmp5 = useFavoritesCleanupActivityDefault(channel);
      let str = tmp4;
      if (tmp4 == null) {
        str = "";
      }
      if (cResult[0] === tmp5) {
        if (cResult[1] === checked) {
          if (cResult[2] === disabled) {
            if (cResult[3] === onChange) {
              if (cResult[4] === str) {
                let tmp6 = cResult[5];
              }
              return tmp6;
            }
          }
        }
      }
      const tmp7 = timestampProducer(TableCheckboxRow.TableCheckboxRow, {
        label: str,
        subLabel: tmp5,
        checked,
        disabled,
        onPress: onChange,
      });
      cResult[0] = tmp5;
      cResult[1] = checked;
      cResult[2] = disabled;
      cResult[3] = onChange;
      cResult[4] = str;
      cResult[5] = tmp7;
      tmp6 = tmp7;
    }
  : function CleanupCandidateRow(channel) {
      channel = channel.channel;
      ({ checked, disabled, onChange } = channel);
      const tmp = useChannelNameDefault(channel);
      const subLabel = useFavoritesCleanupActivityDefault(channel);
      let label = tmp;
      if (tmp == null) {
        label = "";
      }
      return timestampProducer(TableCheckboxRow.TableCheckboxRow, { label, subLabel, checked, disabled, onPress });
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildCleanupModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FavoritesGuildCleanupModal() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { cleanup: null };
        const obj3 = { title: null, headerLeft: null, render: null };
        let intl = util.intl;
        obj3.title = intl.string(_modDef3413["b081B+"]);
        obj3.headerLeft = function headerLeft() {
          const obj = { text: null, size: "sm", variant: "tertiary", onPress: null };
          const intl = require("util").intl;
          obj.text = intl.string(require("util").t["ETE/oC"]);
          obj.onPress = onPress;
          return closure_1_6(require("components/Button/Button").Button, obj);
        };
        obj3.render = function render() {
          return closure_1_6(closure_1_11, {});
        };
        obj2.cleanup = obj3;
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { screens: first, initialRouteName: "cleanup" };
        const tmp8 = timestampProducer(Modal.Modal, obj4);
        cResult[1] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : function FavoritesGuildCleanupModal() {
      const screens = noop.useMemo(() => {
        let obj = { cleanup: null };
        const obj2 = { title: null, headerLeft: null, render: null };
        let intl = require("util").intl;
        obj2.title = intl.string(_modDef3413["b081B+"]);
        obj2.headerLeft = function headerLeft() {
          const obj = { text: null, size: "sm", variant: "tertiary", onPress: null };
          const intl = closure_1_0(1125).intl;
          obj.text = intl.string(closure_1_0(1125).t["ETE/oC"]);
          obj.onPress = onPress;
          return closure_1_6(closure_1_0(5245).Button, obj);
        };
        obj2.render = function render() {
          return closure_1_6(closure_1_11, {});
        };
        obj.cleanup = obj2;
        return obj;
      }, []);
      return timestampProducer(Modal.Modal, { screens, initialRouteName: "cleanup" });
    };
