// discord_app/modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import _modDef3395 from "../../intl/FavoritesGuild.messages.js";
import LayerScope2 from "../../../../design/components/Layers/native/LayerScope.native.tsx";
import FavoritesDismissibleContent from "../../FavoritesDismissibleContent.tsx";
import react from "../../../../../_runtime/00019_react.js";
import FavoriteStore from "../../FavoriteStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ChannelTypes = Constants.ChannelTypes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let items = [, ,];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], GUILD_FORUM: arr[2] } = ChannelTypes);
const set = new Set(items);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = react2;
      const cResult = obj.c(2);
      let tmp4 = null;
      const obj2 = FavoritesDismissibleContent;
      if (obj2.useShouldRenderFavoritesMenuItemPopover()) {
        let tmp6;
        if (cResult[0] !== arg0) {
          const LayerScope = LayerScope2.LayerScope;
          const merged = Object.assign(arg0);
          const tmp12 = <LayerScope zIndex={1}>{null}</LayerScope>;
          cResult[0] = arg0;
          cResult[1] = tmp12;
          tmp6 = tmp12;
        } else {
          tmp6 = cResult[1];
        }
        tmp4 = tmp6;
      }
      return tmp4;
    }
  : (arg0) => {
      let tmp3 = null;
      const obj = FavoritesDismissibleContent;
      if (obj.useShouldRenderFavoritesMenuItemPopover()) {
        const LayerScope = LayerScope2.LayerScope;
        const merged = Object.assign(arg0);
        tmp3 = <LayerScope zIndex={1}>{null}</LayerScope>;
      }
      return tmp3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelType) => {
      let markPopoverAsDismissed;
      let shouldShowPopover;
      let tmp12;
      let tmp19;
      let tmp22;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = markPopoverAsDismissed(576);
      const cResult = obj.c(17);
      channelType = channelType.channelType;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FavoriteStore];
        const fn = function l() {
          return FavoriteStore.hasStoredFavorites();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = markPopoverAsDismissed(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== channelType) {
        const hasItem = set.has(channelType);
        cResult[2] = channelType;
        cResult[3] = hasItem;
        tmp8 = hasItem;
      } else {
        tmp8 = cResult[3];
      }
      const tmpResult2 = markPopoverAsDismissed(10063);
      const favoritesMenuItemPopoverDismissibleContent = tmpResult2.useFavoritesMenuItemPopoverDismissibleContent(tmp8);
      ({ shouldShowPopover, markPopoverAsDismissed } = favoritesMenuItemPopoverDismissibleContent);
      if (cResult[4] !== markPopoverAsDismissed) {
        const fn2 = function b() {
          markPopoverAsDismissed(ContentDismissActionType.USER_DISMISS);
        };
        cResult[4] = markPopoverAsDismissed;
        cResult[5] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== markPopoverAsDismissed) {
        class T {
          constructor() {
            markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
        cResult[6] = markPopoverAsDismissed;
        cResult[7] = T;
      } else {
        class T {
          constructor() {
            markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
      }
      if (cResult[8] !== stateFromStores) {
        class T {
          constructor() {
            markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
        const string = tmp15.string;
        const tmp17 = _modDef3395;
        cResult[8] = stateFromStores;
        cResult[9] = string(stateFromStores ? tmp17.TWuDTt : tmp17["25YCHl"]);
        const stringResult = string(stateFromStores ? tmp17.TWuDTt : tmp17["25YCHl"]);
      } else {
        class T {
          constructor() {
            markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
        const stringResult1 = obj4.string(_modDef3395.Ztl9ht);
        cResult[10] = stringResult1;
        tmp19 = stringResult1;
      } else {
        class T {
          constructor() {
            markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
        const stringResult2 = obj5.string(_modDef3395["+h9aza"]);
        cResult[11] = stringResult2;
        tmp22 = stringResult2;
      } else {
        class T {
          constructor() {
            markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
      }
      if (cResult[12] === T) {
        class T {
          constructor() {
            markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          }
        }
      }
      const obj2 = {
        visible: shouldShowPopover,
        position: "bottom",
        title: tmp14,
        description: tmp19,
        onDismiss: tmp12,
        renderImgComponent: "r",
        buttonLabel: tmp22,
        onButtonPress: T,
      };
      cResult[12] = T;
      cResult[13] = tmp12;
      cResult[14] = shouldShowPopover;
      cResult[15] = tmp14;
      cResult[16] = obj2;
    }
  : (arg0) => {
      let channelType;
      let targetRef;
      let stateFromStores;
      let markPopoverAsDismissed;
      let onDismiss;
      let callback1;
      ({ targetRef, channelType } = arg0);
      let obj = stateFromStores(markPopoverAsDismissed[9]);
      const items = [callback1];
      stateFromStores = obj.useStateFromStores(items, () => callback1.hasStoredFavorites());
      const obj2 = stateFromStores(markPopoverAsDismissed[7]);
      const favoritesMenuItemPopoverDismissibleContent = obj2.useFavoritesMenuItemPopoverDismissibleContent(
        set.has(channelType),
      );
      const shouldShowPopover = favoritesMenuItemPopoverDismissibleContent.shouldShowPopover;
      markPopoverAsDismissed = favoritesMenuItemPopoverDismissibleContent.markPopoverAsDismissed;
      const items1 = [markPopoverAsDismissed];
      onDismiss = onDismiss.useCallback(() => {
        markPopoverAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items1);
      const items2 = [markPopoverAsDismissed];
      callback1 = onDismiss.useCallback(() => {
        markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
      }, items2);
      const items3 = [shouldShowPopover, stateFromStores, onDismiss, callback1];
      const memo = onDismiss.useMemo(() => {
        let TWuDTt;
        let intl2;
        let intl3;
        let string;
        let tmp6;
        const obj = {
          visible: shouldShowPopover,
          position: "bottom",
          title: string(TWuDTt),
          description: intl2.string(tmp6(3395).Ztl9ht),
          onDismiss,
          renderImgComponent: "r",
          buttonLabel: intl3.string(tmp6(3395)["+h9aza"]),
          onButtonPress: callback1,
        };
        const intl = intl4.intl;
        string = intl.string;
        const tmp4 = _modDef3395;
        if (stateFromStores) {
          TWuDTt = tmp4.TWuDTt;
          tmp6 = importDefault;
        } else {
          TWuDTt = tmp4["25YCHl"];
          tmp6 = importDefault;
        }
        intl2 = intl4.intl;
        intl3 = intl4.intl;
        return obj;
      }, items3);
      const obj3 = stateFromStores(markPopoverAsDismissed[12]);
      const coachmark = obj3.useCoachmark(targetRef, memo);
      return null;
    };
const result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx");

export default tmp3;
