// === Module 9442: GameProfileCommunity ===

// Module 9442 (GameProfileCommunity)
import transitionToGuild from "transitionToGuild" /* 7522 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import GameProfileSection from "GameProfileSection" /* 9437 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 9438 */;
import GameProfileGuildCard from "GameProfileGuildCard" /* 9443 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 9444 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let closure_5 = noop.memo(function GameProfileCommunitySkeleton() {
  const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
  return jsx(GameProfileSection.GameProfileSectionSkeleton, { animationDelayMs: result, showViewAllSkeleton: false, skeletonTitleWidth: 80, children: jsx(GameProfileGuildCard.GameProfileGuildCardSkeleton, { animationDelayMs: result }) });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default function GameProfileCommunityServer(closeModal) {
  ({ game, trackAction } = closeModal);
  closeModal = closeModal.closeModal;
  let invite;
  const tmp3 = closeModal(invite[5])(game, closeModal.onInviteResolved);
  invite = tmp3.invite;
  const isMember = tmp3.isMember;
  const items = [invite, isMember, trackAction, closeModal];
  const result = trackAction(invite[5]).hasGameProfileDiscordWebsite(game);
  if (null != invite) {
    if (null != invite.guild) {
      const obj2 = { title: null, children: null };
      const intl2 = trackAction(tmp2[9]).intl;
      obj2.title = intl2.string(trackAction(tmp2[9]).t["U2N+ci"]);
      const obj3 = { guild: null, presenceCount: null, memberCount: null, buttonText: null, onJoin: null };
      const tmpResult = tmp(tmp2[3]);
      const tmpResult2 = tmp(tmp2[4]);
      obj3.guild = trackAction(tmp2[10]).fromInviteGuild(invite.guild);
      let approximate_presence_count = invite.approximate_presence_count;
      if (approximate_presence_count == null) {
        approximate_presence_count = invite.guild.approximate_presence_count;
      }
      obj3.presenceCount = approximate_presence_count;
      let approximate_member_count = invite.approximate_member_count;
      if (approximate_member_count == null) {
        approximate_member_count = invite.guild.approximate_member_count;
      }
      obj3.memberCount = approximate_member_count;
      const intl = trackAction(tmp2[9]).intl;
      const string = intl.string;
      const t = trackAction(tmp2[9]).t;
      if (isMember) {
        let stringResult = string(t.cEnaWx);
      } else {
        stringResult = string(t.XpeFYr);
      }
      obj3.buttonText = stringResult;
      obj3.onJoin = tmp6;
      obj2.children = <tmpResult2 guild={null} presenceCount={null} memberCount={null} buttonText={null} onJoin={null} />;
      let tmp12Result = <tmpResult title={null}>{null}</tmpResult>;
      const tmp4Result = trackAction(tmp2[10]);
    }
    return tmp12Result;
  }
  let tmp9 = null;
  if (result) {
    tmp9 = null;
    if (tmp3.isResolving) {
      tmp9 = <closure_5 />;
    }
  }
  tmp12Result = tmp9;
  const obj = trackAction(invite[5]);
};