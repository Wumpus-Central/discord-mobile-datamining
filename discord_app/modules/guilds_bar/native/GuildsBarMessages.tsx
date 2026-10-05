// discord_app/modules/guilds_bar/native/GuildsBarMessages.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl2 from "../../../intl/index.native.tsx";
import ChatIcon from "../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper.tsx";
import useGuildsBarBottomRightBadgeDefault from "hooks/useGuildsBarBottomRightBadge.tsx";
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx";
import HomeDrawerDirectMessagesRowDefault from "../../home_drawer/native/HomeDrawerDirectMessagesRow.tsx";
import react from "../../../../_runtime/00019_react.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;
let guildId;

const ME = Constants.ME;
const jsx = Fragment.jsx;
const config = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(ME);
  },
};
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let badge;
        let cutouts;
        let tmp13;
        let tmp15;
        let tmp18;
        let tmp5;
        let tmp6;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(13);
        const obj2 = GuildsBarAnimatedItemWrapper;
        const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [SelectedGuildStore];
          const fn = function c() {
            guildId = guildId.getGuildId();
            return null == guildId || guildId === ME;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmpResult = get_initialized;
        const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { mentionCount: 0 };
          cResult[2] = obj3;
          tmp9 = obj3;
        } else {
          tmp9 = cResult[2];
        }
        ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault(tmp9));
        useGuildsBarBottomRightBadgeDefault(tmp9);
        const colors = nativeDefault.colors;
        const tmp12 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t.YUU0RF);
          cResult[3] = stringResult;
          tmp13 = stringResult;
        } else {
          tmp13 = cResult[3];
        }
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp17 = jsx(HomeDrawerDirectMessagesRowDefault, {});
          cResult[4] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[4];
        }
        if (cResult[5] !== tmp12) {
          const tmp20 = jsx(ChatIcon.ChatIcon, { color: tmp12 });
          cResult[5] = tmp12;
          cResult[6] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[6];
        }
        if (cResult[7] === badge) {
          if (cResult[8] === cutouts) {
            if (cResult[9] === stateFromStores) {
              if (cResult[10] === guildsBarAnimatedWrapperStyles) {
                let tmp21;
                if (cResult[11] === tmp18) {
                  tmp21 = cResult[12];
                }
                return tmp21;
              }
            }
          }
        }
        const tmp22 = jsx(GuildsBarAnimatedItemWrapperDefault, {
          selected: stateFromStores,
          circle: false,
          unread: false,
          styles: guildsBarAnimatedWrapperStyles,
          cutouts,
          config,
          overState: "y",
          label: tmp13,
          externalChildren: badge,
          expandedChildren: tmp15,
          children: tmp18,
        });
        cResult[7] = badge;
        cResult[8] = cutouts;
        cResult[9] = stateFromStores;
        cResult[10] = guildsBarAnimatedWrapperStyles;
        cResult[11] = tmp18;
        cResult[12] = tmp22;
        tmp21 = tmp22;
      }
    : () => {
        let badge;
        let cutouts;
        const obj = GuildsBarAnimatedItemWrapper;
        const items = [SelectedGuildStore];
        const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
        const obj2 = get_initialized;
        const stateFromStores = obj2.useStateFromStores(items, () => {
          guildId = guildId.getGuildId();
          return null == guildId || guildId === ME;
        });
        ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 }));
        useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
        const colors = nativeDefault.colors;
        GuildsBarAnimatedItemWrapperDefault;
        const intl = intl2.intl;
        return (
          <tmp5Result
            selected={stateFromStores}
            circle={false}
            unread={false}
            styles={guildsBarAnimatedWrapperStyles}
            cutouts={cutouts}
            config={config}
            overState="y"
            label={intl.string(intl2.t.YUU0RF)}
            externalChildren={badge}
            expandedChildren="bottom"
          >
            {null}
          </tmp5Result>
        );
      },
);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;
