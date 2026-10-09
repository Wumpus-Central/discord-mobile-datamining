// discord_app/modules/user_settings/chat/native/UserSettingsText.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import UserSettingsActionCreatorsDefault from "../../../../actions/UserSettingsActionCreators.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import _modDef9741 from "../../../../../_runtime/metro/09741__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import SelectivelySyncedUserSettingsStore from "../../SelectivelySyncedUserSettingsStore.tsx";
import UnsyncedUserSettingsStore from "../../UnsyncedUserSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const VideoQualitySettings = fn(1207).VideoQualitySettings;
const Constants = fn(1085);
({ AnalyticEvents: closure_9, AnalyticsSections: c10, UserSettingsSections: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { flex: { flex: 1 }, nitroUpsell: { flexDirection: "row", alignItems: "center" }, nitroIcon: null };
let size = { width: 16, height: 16, tintColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj2.nitroIcon = size;
let closure_15 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
function setDataSavingMode(dataSavingMode) {
  dataSavingMode = dataSavingMode.dataSavingMode;
  ({ videoUploadQuality, viewImageDescriptions, lowQualityImageMode } = dataSavingMode);
  AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, {
    video_upload_quality: videoUploadQuality,
    image_descriptions: viewImageDescriptions,
    low_quality_image_mode: lowQualityImageMode,
    data_saving_mode: dataSavingMode,
    updated_setting: "data_saving_mode",
  });
  const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ dataSavingMode });
}
function setVideoUploadQuality(videoUploadQuality) {
  videoUploadQuality = videoUploadQuality.videoUploadQuality;
  ({ viewImageDescriptions, lowQualityImageMode, dataSavingMode } = videoUploadQuality);
  AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, {
    video_upload_quality: videoUploadQuality,
    image_descriptions: viewImageDescriptions,
    low_quality_image_mode: lowQualityImageMode,
    data_saving_mode: dataSavingMode,
    updated_setting: "video_upload_quality",
  });
  const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ videoUploadQuality });
}
function setImageDescriptions(viewImageDescriptions) {
  viewImageDescriptions = viewImageDescriptions.viewImageDescriptions;
  ({ videoUploadQuality, lowQualityImageMode, dataSavingMode } = viewImageDescriptions);
  AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, {
    video_upload_quality: videoUploadQuality,
    image_descriptions: viewImageDescriptions,
    low_quality_image_mode: lowQualityImageMode,
    data_saving_mode: dataSavingMode,
    updated_setting: "image_descriptions",
  });
  const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
  ViewImageDescriptions.updateSetting(viewImageDescriptions);
}
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/chat/native/UserSettingsText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsText() {
      const cResult = require("c").c(74);
      let obj = require("c");
      const token = require("useToken").useToken(setting(setting1[9]).modules.mobile.TABLE_ROW_PADDING);
      const tmp6 = tmp38();
      _require = tmp6;
      const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
      setting = InlineAttachmentMedia.useSetting();
      const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
      setting1 = InlineEmbedMedia.useSetting();
      const RenderEmbeds = require("UserSettings").RenderEmbeds;
      const setting2 = RenderEmbeds.useSetting();
      const RenderReactions = require("UserSettings").RenderReactions;
      const setting3 = RenderReactions.useSetting();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [dataSavingMode];
        class S {
          constructor() {
            obj = {
              lowQualityImageMode: dataSavingMode.dataSavingMode,
              videoUploadQuality: dataSavingMode.videoUploadQuality,
              dataSavingMode: dataSavingMode.dataSavingMode,
            };
            return obj;
          }
        }
        cResult[0] = items;
        cResult[1] = S;
        tmp11 = items;
      } else {
        [tmp11, tmp12] = cResult;
      }
      let obj2 = require("useToken");
      const tmp4 = setting;
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp11, S);
      const lowQualityImageMode = stateFromStoresObject.lowQualityImageMode;
      const videoUploadQuality = stateFromStoresObject.videoUploadQuality;
      dataSavingMode = stateFromStoresObject.dataSavingMode;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [lowQualityImageMode];
        class D {
          constructor() {
            return lowQualityImageMode.getPremiumTypeSubscription();
          }
        }
        cResult[2] = items1;
        cResult[3] = D;
        let tmp16 = D;
        let tmp15 = items1;
      } else {
        tmp15 = cResult[2];
        tmp16 = cResult[3];
      }
      const tmpResult = require("initialize");
      const stateFromStores = require("initialize").useStateFromStores(tmp15, tmp16);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [setting3];
        class C {
          constructor() {
            return closure_4.getCurrentUser();
          }
        }
        cResult[4] = items2;
        cResult[5] = C;
        let tmp20 = C;
        let tmp19 = items2;
      } else {
        tmp19 = cResult[4];
        tmp20 = cResult[5];
      }
      const tmpResult6 = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp19, tmp20);
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === stateFromStores1) {
          let tmp23 = cResult[8];
        }
        closure_8 = tmp23;
        const _Symbol = Symbol;
        class C {
          constructor() {
            return closure_4.getCurrentUser();
          }
        }
        if (tmp25 === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [videoUploadQuality];
          class N {
            constructor() {
              return videoUploadQuality.shouldSync("text");
            }
          }
          cResult[9] = items3;
          cResult[10] = N;
          let tmp27 = N;
          let tmp26 = items3;
        } else {
          tmp26 = cResult[9];
          tmp27 = cResult[10];
        }
        const stateFromStores2 = tmp(tmp2[16]).useStateFromStores(tmp26, tmp27);
        let ViewImageDescriptions = tmp(tmp2[11]).ViewImageDescriptions;
        const setting4 = ViewImageDescriptions.useSetting();
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          function handleSync(shouldSync) {
            const result = setting(setting1[12]).setShouldSyncTextSettings(shouldSync);
          }
          cResult[11] = handleSync;
          class N {
            constructor() {
              return videoUploadQuality.shouldSync("text");
            }
          }
        } else {
          const tmp31 = cResult[11];
        }
        const onValueChange = tmp31;
        if (cResult[12] === lowQualityImageMode) {
          if (cResult[13] === videoUploadQuality) {
            if (cResult[14] === setting4) {
              let tmp32 = cResult[15];
            }
            const onValueChange2 = tmp32;
            if (cResult[16] === dataSavingMode) {
              if (cResult[17] === lowQualityImageMode) {
                if (cResult[18] === setting4) {
                  let tmp33 = cResult[19];
                }
                const onChange = tmp33;
                if (cResult[20] === dataSavingMode) {
                  if (cResult[21] === lowQualityImageMode) {
                    if (cResult[22] === videoUploadQuality) {
                      let tmp35 = cResult[23];
                    }
                    const onValueChange3 = tmp35;
                    tmp(tmp2[18]);
                    class N {
                      constructor() {
                        return videoUploadQuality.shouldSync("text");
                      }
                    }
                    if (cResult[24] !== tmp38) {
                      function navigateToNitroPage() {
                        UserSettingsModalActionCreatorsDefault.setSection(constants3.PREMIUM);
                        tmp38.push(constants3.PREMIUM, { isFromTextSection: true });
                      }
                      cResult[24] = tmp38;
                      class N {
                        constructor() {
                          return videoUploadQuality.shouldSync("text");
                        }
                      }
                      cResult[25] = navigateToNitroPage;
                      let tmp39 = navigateToNitroPage;
                    } else {
                      tmp39 = cResult[25];
                    }
                    closure_16 = tmp39;
                    if (cResult[26] === setting) {
                      if (cResult[27] === setting1) {
                        if (cResult[28] === tmp35) {
                          if (cResult[31] !== setting2) {
                            function renderEmbedsSection() {
                              const obj = { title: null, hasIcons: false, children: null };
                              const intl = util.intl;
                              obj.title = intl.string(util.t.PWZOn4);
                              const obj2 = { label: null, value: null, onValueChange: null };
                              const intl2 = util.intl;
                              obj2.label = intl2.string(util.t["5bK9vw"]);
                              obj2.value = setting2;
                              obj2.onValueChange = UserSettings.RenderEmbeds.updateSetting;
                              obj.children = __initData(TableSwitchRow.TableSwitchRow, obj2);
                              return __initData(TableRowGroup.TableRowGroup, obj);
                            }
                            cResult[31] = setting2;
                            class N {
                              constructor() {
                                return videoUploadQuality.shouldSync("text");
                              }
                            }
                            cResult[32] = renderEmbedsSection;
                            let tmp41 = renderEmbedsSection;
                          } else {
                            tmp41 = cResult[32];
                          }
                          if (cResult[33] !== setting3) {
                            function renderEmojiSection() {
                              const obj = { title: null, hasIcons: false, children: null };
                              const intl = util.intl;
                              obj.title = intl.string(util.t.sMOuuS);
                              const obj2 = { label: null, value: null, onValueChange: null };
                              const intl2 = util.intl;
                              obj2.label = intl2.string(util.t["zge/fP"]);
                              obj2.value = setting3;
                              obj2.onValueChange = UserSettings.RenderReactions.updateSetting;
                              obj.children = __initData(TableSwitchRow.TableSwitchRow, obj2);
                              return __initData(TableRowGroup.TableRowGroup, obj);
                            }
                            cResult[33] = setting3;
                            class N {
                              constructor() {
                                return videoUploadQuality.shouldSync("text");
                              }
                            }
                            cResult[34] = renderEmojiSection;
                            let tmp42 = renderEmojiSection;
                          } else {
                            tmp42 = cResult[34];
                          }
                          class N {
                            constructor() {
                              return videoUploadQuality.shouldSync("text");
                            }
                          }
                          if (cResult[37] === tmp39) {
                            if (cResult[38] === tmp6.nitroIcon) {
                              if (cResult[39] === tmp6.nitroUpsell) {
                                let tmp44 = cResult[40];
                              }
                              closure_17 = tmp44;
                              if (cResult[41] === tmp44) {
                                if (cResult[42] === tmp33) {
                                  if (cResult[43] === tmp23) {
                                    if (cResult[44] === videoUploadQuality) {
                                      let tmp45 = cResult[45];
                                    }
                                    if (cResult[46] === dataSavingMode) {
                                      if (cResult[47] === tmp32) {
                                        let tmp47 = cResult[48];
                                      }
                                      if (cResult[49] !== token) {
                                        let obj3 = { paddingHorizontal: token };
                                        class N {
                                          constructor() {
                                            return videoUploadQuality.shouldSync("text");
                                          }
                                        }
                                        cResult[50] = obj3;
                                        let tmp48 = obj3;
                                      } else {
                                        tmp48 = cResult[50];
                                      }
                                      class N {
                                        constructor() {
                                          return videoUploadQuality.shouldSync("text");
                                        }
                                      }
                                      if (cResult[53] !== tmp45) {
                                        const tmp45Result = tmp45();
                                        cResult[53] = tmp45;
                                        class N {
                                          constructor() {
                                            return videoUploadQuality.shouldSync("text");
                                          }
                                        }
                                        cResult[54] = tmp45Result;
                                        let tmp50 = tmp45Result;
                                      } else {
                                        tmp50 = cResult[54];
                                      }
                                      if (cResult[55] !== tmp47) {
                                        const tmp47Result = tmp47();
                                        cResult[55] = tmp47;
                                        class N {
                                          constructor() {
                                            return videoUploadQuality.shouldSync("text");
                                          }
                                        }
                                        cResult[56] = tmp47Result;
                                        let tmp52 = tmp47Result;
                                      } else {
                                        tmp52 = cResult[56];
                                      }
                                      if (cResult[57] !== tmp41) {
                                        const tmp41Result = tmp41();
                                        cResult[57] = tmp41;
                                        class N {
                                          constructor() {
                                            return videoUploadQuality.shouldSync("text");
                                          }
                                        }
                                        cResult[58] = tmp41Result;
                                        let tmp54 = tmp41Result;
                                      } else {
                                        tmp54 = cResult[58];
                                      }
                                      if (cResult[59] !== tmp42) {
                                        const tmp42Result = tmp42();
                                        cResult[59] = tmp42;
                                        class N {
                                          constructor() {
                                            return videoUploadQuality.shouldSync("text");
                                          }
                                        }
                                        cResult[60] = tmp42Result;
                                        let tmp56 = tmp42Result;
                                      } else {
                                        tmp56 = cResult[60];
                                      }
                                      if (cResult[61] !== tmp43) {
                                        const tmp43Result = tmp43();
                                        cResult[61] = tmp43;
                                        class N {
                                          constructor() {
                                            return videoUploadQuality.shouldSync("text");
                                          }
                                        }
                                        cResult[62] = tmp43Result;
                                        let tmp58 = tmp43Result;
                                      } else {
                                        tmp58 = cResult[62];
                                      }
                                      if (cResult[63] === tmp48) {
                                        if (cResult[64] === tmp49) {
                                          if (cResult[65] === tmp50) {
                                            if (cResult[66] === tmp52) {
                                              if (cResult[67] === tmp54) {
                                                if (cResult[68] === tmp56) {
                                                  if (cResult[69] === tmp58) {
                                                    let tmp60 = cResult[70];
                                                  }
                                                  if (cResult[71] === tmp6.flex) {
                                                    if (cResult[72] === tmp60) {
                                                      let tmp64 = cResult[73];
                                                    }
                                                    return tmp64;
                                                  }
                                                  class N {
                                                    constructor() {
                                                      return videoUploadQuality.shouldSync("text");
                                                    }
                                                  }
                                                  let obj4 = { style: tmp6.flex, children: tmp60 };
                                                  const tmp66 = onValueChange2(setting2, obj4);
                                                  cResult[71] = tmp6.flex;
                                                  cResult[72] = tmp60;
                                                  cResult[73] = tmp66;
                                                  tmp64 = tmp66;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let obj5 = { children: null };
                                      let obj6 = { spacing: tmp4(tmp2[9]).space.PX_24, style: tmp48, children: null };
                                      const items4 = [tmp49, tmp50, tmp52, tmp54, tmp56, tmp58];
                                      obj6.children = items4;
                                      obj5.children = onChange(tmp(tmp2[29]).Stack, obj6);
                                      const tmp63 = onValueChange2(tmp(tmp2[28]).Form, obj5);
                                      cResult[63] = tmp48;
                                      cResult[64] = tmp49;
                                      cResult[65] = tmp50;
                                      cResult[66] = tmp52;
                                      cResult[67] = tmp54;
                                      cResult[68] = tmp56;
                                      cResult[69] = tmp58;
                                      cResult[70] = tmp63;
                                      tmp60 = tmp63;
                                    }
                                    function renderDataSavingModeSetting() {
                                      const obj = { title: null, description: null, hasIcons: false, children: null };
                                      const intl = util.intl;
                                      obj.title = intl.string(util.t.fyG8t2);
                                      const intl2 = util.intl;
                                      obj.description = intl2.string(util.t["wC0+Ph"]);
                                      const obj2 = { label: null, value: null, onValueChange: null };
                                      const intl3 = util.intl;
                                      obj2.label = intl3.string(util.t.ix8XIj);
                                      obj2.value = dataSavingMode;
                                      obj2.onValueChange = onValueChange2;
                                      obj.children = __initData(TableSwitchRow.TableSwitchRow, obj2);
                                      return __initData(TableRowGroup.TableRowGroup, obj);
                                    }
                                    class N {
                                      constructor() {
                                        return videoUploadQuality.shouldSync("text");
                                      }
                                    }
                                    cResult[46] = dataSavingMode;
                                    cResult[47] = tmp32;
                                    cResult[48] = renderDataSavingModeSetting;
                                    tmp47 = renderDataSavingModeSetting;
                                  }
                                }
                              }
                              class N {
                                constructor() {
                                  return videoUploadQuality.shouldSync("text");
                                }
                              }
                              cResult[41] = tmp44;
                              cResult[42] = tmp33;
                              cResult[43] = tmp23;
                              cResult[44] = videoUploadQuality;
                              cResult[45] = tmp46;
                              tmp45 = tmp46;
                            }
                          }
                          function renderNitroUpsellText() {
                            const obj = { style: closure_0.nitroUpsell, children: null };
                            const items = [
                              __initData(native.Icon, {
                                source: _modDef9741,
                                size: native.Icon.Sizes.SMALL,
                                style: closure_0.nitroIcon,
                              }),
                            ];
                            const obj3 = {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              style: { marginLeft: 4 },
                              children: null,
                            };
                            const intl = util.intl;
                            obj3.children = intl.format(util.t.uW1zul, {
                              onClick() {
                                return closure_1_16();
                              },
                            });
                            items[1] = __initData(Text_Text.Text, obj3);
                            obj.children = items;
                            return __initData2(View, obj);
                          }
                          cResult[37] = tmp39;
                          cResult[38] = tmp6.nitroIcon;
                          cResult[39] = tmp6.nitroUpsell;
                          cResult[40] = renderNitroUpsellText;
                          tmp44 = renderNitroUpsellText;
                        }
                      }
                    }
                    function renderInlineMediaSection() {
                      const obj = { children: null };
                      const obj2 = { title: null, description: null, hasIcons: false, children: null };
                      const intl = util.intl;
                      obj2.title = intl.string(util.t["9nyle0"]);
                      const intl2 = util.intl;
                      obj2.description = intl2.format(util.t.qjjvqO, { maxSize: 8 });
                      const obj3 = { label: null, value: null, onValueChange: null };
                      const intl3 = util.intl;
                      obj3.label = intl3.string(util.t.U47N1p);
                      obj3.value = setting1;
                      obj3.onValueChange = UserSettings.InlineEmbedMedia.updateSetting;
                      const items = [__initData(TableSwitchRow.TableSwitchRow, obj3)];
                      const obj4 = { label: null, value: null, onValueChange: null };
                      const intl4 = util.intl;
                      obj4.label = intl4.string(util.t.VP11No);
                      obj4.value = setting;
                      obj4.onValueChange = UserSettings.InlineAttachmentMedia.updateSetting;
                      items[1] = __initData(TableSwitchRow.TableSwitchRow, obj4);
                      obj2.children = items;
                      const items1 = [__initData2(TableRowGroup.TableRowGroup, obj2)];
                      const obj5 = { description: null, hasIcons: false, children: null };
                      const intl5 = util.intl;
                      obj5.description = intl5.string(util.t.T0rbtM);
                      const obj6 = { label: null, value: null, onValueChange: null };
                      const intl6 = util.intl;
                      obj6.label = intl6.string(util.t["w8j+yW"]);
                      obj6.value = setting4;
                      obj6.onValueChange = onValueChange3;
                      obj5.children = __initData(TableSwitchRow.TableSwitchRow, obj6);
                      items1[1] = __initData(TableRowGroup.TableRowGroup, obj5);
                      obj.children = items1;
                      return __initData2(state, obj);
                    }
                    cResult[26] = setting;
                    cResult[27] = setting1;
                    cResult[28] = tmp35;
                    cResult[29] = setting4;
                    cResult[30] = renderInlineMediaSection;
                  }
                }
                class N {
                  constructor() {
                    return videoUploadQuality.shouldSync("text");
                  }
                }
                cResult[20] = dataSavingMode;
                cResult[21] = lowQualityImageMode;
                cResult[22] = videoUploadQuality;
                cResult[23] = tmp36;
                tmp35 = tmp36;
              }
            }
            class N {
              constructor() {
                return videoUploadQuality.shouldSync("text");
              }
            }
            cResult[16] = dataSavingMode;
            cResult[17] = lowQualityImageMode;
            cResult[18] = setting4;
            cResult[19] = tmp34;
            tmp33 = tmp34;
          }
        }
        function toggleDataSavingMode(data_saving_mode) {
          AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, {
            video_upload_quality: videoUploadQuality,
            image_descriptions: setting4,
            low_quality_image_mode: lowQualityImageMode,
            data_saving_mode,
            updated_setting: "data_saving_mode",
          });
          const obj2 = {
            video_upload_quality: videoUploadQuality,
            image_descriptions: setting4,
            low_quality_image_mode: lowQualityImageMode,
            data_saving_mode,
            updated_setting: "data_saving_mode",
          };
          const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({
            dataSavingMode: data_saving_mode,
          });
        }
        cResult[12] = lowQualityImageMode;
        cResult[13] = videoUploadQuality;
        cResult[14] = setting4;
        cResult[15] = toggleDataSavingMode;
        tmp32 = toggleDataSavingMode;
        const tmpResult8 = tmp(tmp2[16]);
      }
      const tmpResult7 = require("initialize");
      let result = require("PremiumUtils").hasPremiumSubscriptionToDisplay(stateFromStores1, stateFromStores);
      cResult[6] = stateFromStores;
      cResult[7] = stateFromStores1;
      cResult[8] = result;
      tmp23 = result;
      const tmpResult10 = require("PremiumUtils");
    }
  : function UserSettingsText() {
      const token = require("useToken").useToken(
        videoUploadQuality(dataSavingMode[9]).modules.mobile.TABLE_ROW_PADDING,
      );
      const tmp5 = closure_15();
      const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
      const setting = InlineAttachmentMedia.useSetting();
      const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
      const setting1 = InlineEmbedMedia.useSetting();
      const RenderEmbeds = require("UserSettings").RenderEmbeds;
      const setting2 = RenderEmbeds.useSetting();
      const RenderReactions = require("UserSettings").RenderReactions;
      const setting3 = RenderReactions.useSetting();
      let obj = require("useToken");
      const items = [UnsyncedUserSettingsStore];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({
        lowQualityImageMode: UnsyncedUserSettingsStore.dataSavingMode,
        videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality,
        dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode,
      }));
      ({ lowQualityImageMode: require, videoUploadQuality } = stateFromStoresObject);
      dataSavingMode = stateFromStoresObject.dataSavingMode;
      let obj2 = require("initialize");
      const items1 = [SubscriptionStore];
      const stateFromStores = require("initialize").useStateFromStores(items1, () =>
        premiumTypeSubscription.getPremiumTypeSubscription(),
      );
      const obj3 = require("initialize");
      const items2 = [closure_4];
      const stateFromStores1 = require("initialize").useStateFromStores(items2, () => closure_4.getCurrentUser());
      const obj4 = require("initialize");
      let result = require("PremiumUtils").hasPremiumSubscriptionToDisplay(stateFromStores1, stateFromStores);
      const obj5 = require("PremiumUtils");
      const items3 = [SelectivelySyncedUserSettingsStore];
      const stateFromStores2 = require("initialize").useStateFromStores(items3, () =>
        SelectivelySyncedUserSettingsStore.shouldSync("text"),
      );
      let ViewImageDescriptions = require("UserSettings").ViewImageDescriptions;
      const setting4 = ViewImageDescriptions.useSetting();
      const obj6 = require("initialize");
      closure_4 = require("useNavigation").useNavigation();
      const obj8 = { style: tmp5.flex, children: null };
      const obj9 = {
        spacing: videoUploadQuality(dataSavingMode[9]).space.PX_24,
        style: { paddingHorizontal: token },
        children: null,
      };
      const obj10 = { children: null };
      const obj11 = { title: null, description: null, hasIcons: false, children: null };
      const intl = require("util").intl;
      obj11.title = intl.string(require("util").t["9nyle0"]);
      const intl2 = require("util").intl;
      obj11.description = intl2.format(require("util").t.qjjvqO, { maxSize: 8 });
      const obj12 = { label: null, value: null, onValueChange: null };
      const intl3 = require("util").intl;
      obj12.label = intl3.string(require("util").t.U47N1p);
      obj12.value = setting1;
      obj12.onValueChange = require("UserSettings").InlineEmbedMedia.updateSetting;
      const items4 = [closure_12(require("TableSwitchRow").TableSwitchRow, obj12)];
      const obj13 = { label: null, value: null, onValueChange: null };
      const intl4 = require("util").intl;
      obj13.label = intl4.string(require("util").t.VP11No);
      obj13.value = setting;
      obj13.onValueChange = require("UserSettings").InlineAttachmentMedia.updateSetting;
      items4[1] = closure_12(require("TableSwitchRow").TableSwitchRow, obj13);
      obj11.children = items4;
      const items5 = [closure_13(require("TableRowGroup").TableRowGroup, obj11)];
      const obj14 = { description: null, hasIcons: false, children: null };
      const intl5 = require("util").intl;
      obj14.description = intl5.string(require("util").t.T0rbtM);
      const obj15 = { label: null, value: null, onValueChange: null };
      const intl6 = require("util").intl;
      obj15.label = intl6.string(require("util").t["w8j+yW"]);
      obj15.value = setting4;
      obj15.onValueChange = function updateImageDescriptions(image_descriptions) {
        AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, {
          video_upload_quality: videoUploadQuality,
          image_descriptions,
          low_quality_image_mode,
          data_saving_mode: dataSavingMode,
          updated_setting: "image_descriptions",
        });
        const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
        ViewImageDescriptions.updateSetting(image_descriptions);
      };
      obj14.children = closure_12(require("TableSwitchRow").TableSwitchRow, obj15);
      items5[1] = closure_12(require("TableRowGroup").TableRowGroup, obj14);
      obj10.children = items5;
      const items6 = [closure_13(closure_14, obj10), , , , ,];
      const obj16 = { title: null, value: null, onChange: null, description: null, hasIcons: false, children: null };
      const intl7 = require("util").intl;
      const obj7 = require("useNavigation");
      obj16.title = intl7.string(require("util").t.PXq9f1).toUpperCase();
      obj16.value = videoUploadQuality;
      obj16.onChange = function updateVideoUploadQuality(video_upload_quality) {
        AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, {
          video_upload_quality,
          image_descriptions: setting4,
          low_quality_image_mode,
          data_saving_mode: dataSavingMode,
          updated_setting: "video_upload_quality",
        });
        const obj2 = {
          video_upload_quality,
          image_descriptions: setting4,
          low_quality_image_mode,
          data_saving_mode: dataSavingMode,
          updated_setting: "video_upload_quality",
        };
        const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({
          videoUploadQuality: video_upload_quality,
        });
      };
      const intl8 = require("util").intl;
      obj16.description = intl8.format(require("util").t["Up+hSO"], {
        supportURL: "https://support.discord.com/hc/articles/9665451164951",
      });
      const obj17 = { label: null, value: null };
      const intl9 = require("util").intl;
      obj17.label = intl9.string(require("util").t.cWGW5d);
      obj17.value = VideoQualitySettings.BEST;
      const items7 = [closure_12(require("TableRadioRow").TableRadioRow, obj17), ,];
      const obj18 = { label: null, value: null };
      const intl10 = require("util").intl;
      obj18.label = intl10.string(require("util").t["5hKnyC"]);
      obj18.value = VideoQualitySettings.STANDARD;
      items7[1] = closure_12(require("TableRadioRow").TableRadioRow, obj18);
      const obj19 = { label: null, value: null };
      const intl11 = require("util").intl;
      obj19.label = intl11.string(require("util").t.y5k4ZJ);
      obj19.value = VideoQualitySettings.DATA_SAVER;
      items7[2] = closure_12(require("TableRadioRow").TableRadioRow, obj19);
      obj16.children = items7;
      const items8 = [closure_13(require("TableRadioGroup").TableRadioGroup, obj16)];
      let tmp18Result = !result;
      if (!result) {
        const obj20 = { style: tmp5.nitroUpsell, children: null };
        const obj21 = {
          source: videoUploadQuality(tmp2[24]),
          size: require("native").Icon.Sizes.SMALL,
          style: tmp5.nitroIcon,
        };
        const items9 = [closure_12(require("native").Icon, obj21)];
        const obj22 = { variant: "text-sm/medium", color: "text-muted", style: { marginLeft: 4 }, children: null };
        const intl12 = require("util").intl;
        const obj23 = {
          onClick() {
            UserSettingsModalActionCreatorsDefault.setSection(constants3.PREMIUM);
            closure_4.push(constants3.PREMIUM, { isFromTextSection: true });
          },
        };
        obj22.children = intl12.format(require("util").t.uW1zul, obj23);
        items9[1] = closure_12(require("Text/Text").Text, obj22);
        obj20.children = items9;
        tmp18Result = closure_13(tmp17, obj20);
      }
      const obj24 = { children: null };
      items8[1] = tmp18Result;
      function handleSync(shouldSync) {
        const result = videoUploadQuality(dataSavingMode[12]).setShouldSyncTextSettings(shouldSync);
      }
      function toggleDataSavingMode(data_saving_mode) {
        AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, {
          video_upload_quality: videoUploadQuality,
          image_descriptions: setting4,
          low_quality_image_mode,
          data_saving_mode,
          updated_setting: "data_saving_mode",
        });
        const obj2 = {
          video_upload_quality: videoUploadQuality,
          image_descriptions: setting4,
          low_quality_image_mode,
          data_saving_mode,
          updated_setting: "data_saving_mode",
        };
        const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ dataSavingMode: data_saving_mode });
      }
      items6[1] = closure_13(setting4, { children: items8 });
      const obj25 = { title: null, description: null, hasIcons: false, children: null };
      const intl13 = require("util").intl;
      obj25.title = intl13.string(require("util").t.fyG8t2);
      const intl14 = require("util").intl;
      obj25.description = intl14.string(require("util").t["wC0+Ph"]);
      const obj26 = { label: null, value: null, onValueChange: null };
      const intl15 = require("util").intl;
      obj26.label = intl15.string(require("util").t.ix8XIj);
      obj26.value = dataSavingMode;
      obj26.onValueChange = toggleDataSavingMode;
      obj25.children = closure_12(require("TableSwitchRow").TableSwitchRow, obj26);
      items6[2] = closure_12(require("TableRowGroup").TableRowGroup, obj25);
      const obj27 = { title: null, hasIcons: false, children: null };
      const intl16 = require("util").intl;
      obj27.title = intl16.string(require("util").t.PWZOn4);
      const obj28 = { label: null, value: null, onValueChange: null };
      const intl17 = require("util").intl;
      obj28.label = intl17.string(require("util").t["5bK9vw"]);
      obj28.value = setting2;
      obj28.onValueChange = require("UserSettings").RenderEmbeds.updateSetting;
      obj27.children = closure_12(require("TableSwitchRow").TableSwitchRow, obj28);
      items6[3] = closure_12(require("TableRowGroup").TableRowGroup, obj27);
      const obj29 = { title: null, hasIcons: false, children: null };
      const intl18 = require("util").intl;
      obj29.title = intl18.string(require("util").t.sMOuuS);
      const obj30 = { label: null, value: null, onValueChange: null };
      const intl19 = require("util").intl;
      obj30.label = intl19.string(require("util").t["zge/fP"]);
      obj30.value = setting3;
      obj30.onValueChange = require("UserSettings").RenderReactions.updateSetting;
      obj29.children = closure_12(require("TableSwitchRow").TableSwitchRow, obj30);
      items6[4] = closure_12(require("TableRowGroup").TableRowGroup, obj29);
      const obj31 = { title: null, description: null, hasIcons: false, children: null };
      const intl20 = require("util").intl;
      obj31.title = intl20.string(require("util").t.BkuOO6);
      const intl21 = require("util").intl;
      obj31.description = intl21.string(require("util").t.p4IKE9);
      const obj32 = { label: null, value: null, onValueChange: null };
      const intl22 = require("util").intl;
      obj32.label = intl22.string(require("util").t["3340dY"]);
      obj32.value = false !== stateFromStores2;
      obj32.onValueChange = handleSync;
      obj31.children = closure_12(require("TableSwitchRow").TableSwitchRow, obj32);
      items6[5] = closure_12(require("TableRowGroup").TableRowGroup, obj31);
      obj9.children = items6;
      obj24.children = closure_13(require("Stack/Stack").Stack, obj9);
      obj8.children = closure_12(require("Form").Form, obj24);
      return closure_12(setting4, obj8);
    };
export const setStickerAutocomplete = function setStickerAutocomplete(enabled) {
  const obj2 = { enabled, location: { section: constants2.SETTINGS_TEXT_AND_IMAGES } };
  AnalyticsUtilsDefault.track(constants.STICKERS_IN_AUTOCOMPLETE_TOGGLED, obj2);
  const IncludeStickersInAutocomplete = UserSettings.IncludeStickersInAutocomplete;
  IncludeStickersInAutocomplete.updateSetting(enabled);
};
export const setLowQualityImageMode = function setLowQualityImageMode(lowQualityImageMode) {
  lowQualityImageMode = lowQualityImageMode.lowQualityImageMode;
  ({ videoUploadQuality, viewImageDescriptions, dataSavingMode } = lowQualityImageMode);
  AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, {
    video_upload_quality: videoUploadQuality,
    image_descriptions: viewImageDescriptions,
    low_quality_image_mode: lowQualityImageMode,
    data_saving_mode: dataSavingMode,
    updated_setting: "low_quality_image_mode",
  });
  const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ lowQualityImageMode });
};
export { setDataSavingMode };
export { setVideoUploadQuality };
export { setImageDescriptions };
