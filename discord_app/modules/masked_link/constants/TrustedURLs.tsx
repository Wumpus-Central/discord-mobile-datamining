// === Module 12768: TrustedURLs ===

// Module 12768 (TrustedURLs)
import size from "module_2" /* 2 */;

const items = [...new Set(["https://account.riotgames.com/#connected-accounts", "https://aes.sgp.pvp.net/providers/discord/link/v1", "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord", "https://marvelrivals.com/discord", "https://wutheringwaves-dc.kurogames-global.com/", "https://id.embark.games/id/connected-platforms", "https://myaccount.ea.com/am/ui/connected-accounts", "https://playbpsr.com/discord_bind", "https://infinitynikki.infoldgames.com/proj/dcbd.html", "https://vrchat.com/home/profile", "https://account.1047games.com/", "https://discord.facepunch.com/", "https://account.battle.net/connections/discord"])];
new Set(["https://account.riotgames.com/#connected-accounts", "https://aes.sgp.pvp.net/providers/discord/link/v1", "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord", "https://marvelrivals.com/discord", "https://wutheringwaves-dc.kurogames-global.com/", "https://id.embark.games/id/connected-platforms", "https://myaccount.ea.com/am/ui/connected-accounts", "https://playbpsr.com/discord_bind", "https://infinitynikki.infoldgames.com/proj/dcbd.html", "https://vrchat.com/home/profile", "https://account.1047games.com/", "https://discord.facepunch.com/", "https://account.battle.net/connections/discord"]);
const set1 = new Set(items);
const result = size.fileFinishedImporting("modules/masked_link/constants/TrustedURLs.tsx");

export const TRUSTED_URLS = set1;