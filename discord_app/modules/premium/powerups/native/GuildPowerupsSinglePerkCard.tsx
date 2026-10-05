// === Module 12229: GuildPowerupsSinglePerkCard ===

// Module 12229 (GuildPowerupsSinglePerkCard)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12155 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12159 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12176 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12177 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12225 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 12230 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let badge;
  let guildId;
  let powerup;
  const obj = react2;
  const cResult = obj.c(8);
  ({ guildId, powerup, badge } = arg0);
  const tmp4 = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp5 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp6 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  const obj2 = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj2.useCalculatePowerupCardStatus(powerup, tmp5, tmp6);
  const tmp8 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  let str = tmp4;
  if (tmp4 == null) {
    str = "";
  }
  if (cResult[0] === badge) {
    if (cResult[1] === tmp8) {
      if (cResult[2] === powerup.cost) {
        if (cResult[3] === powerup.description) {
          if (cResult[4] === powerup.title) {
            if (cResult[5] === calculatePowerupCardStatus) {
              let tmp9;
              if (cResult[6] === str) {
                tmp9 = cResult[7];
              }
              return tmp9;
            }
          }
        }
      }
    }
  }
  const tmp10 = jsx(GuildPowerupsPerkCardDefault, { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: str, status: calculatePowerupCardStatus, onPress: tmp8, badge });
  cResult[0] = badge;
  cResult[1] = tmp8;
  cResult[2] = powerup.cost;
  cResult[3] = powerup.description;
  cResult[4] = powerup.title;
  cResult[5] = calculatePowerupCardStatus;
  cResult[6] = str;
  cResult[7] = tmp10;
  tmp9 = tmp10;
}) : ((badge) => {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  badge = badge.badge;
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp2 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  const obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, tmp2);
  const tmp4 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  GuildPowerupsPerkCardDefault;
  if (str == null) {
    str = "";
  }
  return <tmp6 title={powerup.title} description={powerup.description} cost={powerup.cost} imageUrl={str} status={calculatePowerupCardStatus} onPress={tmp4} badge={badge} />;
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default tmp3;