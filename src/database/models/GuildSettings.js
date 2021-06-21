const { Schema, model } = require('mongoose');

const guildSchema = Schema({
	guildID: String,
	guildName: String,
	prefix: { type: String, default: require('../../config.js').defaultSettings.prefix },
	// Welcome Plugin
	welcomePlugin: { type: Boolean, default: true },
	// if anti-raid is true and welcome plugin is true both will get activated so this will make sure anti-riad runs first and once 'accepeted' welcome plugn will run
	welcomeRaidConnect: { type: Boolean, default: false },
	welcomeMessageToggle: { type: Boolean, default: true },
	welcomeMessageChannel: { type: String, default: '830041375310610453' },
	WelcomeMessageText: { type: Array, default: ['GUILDBANADD', 'GUILDMEMBERADD'] },
	welcomePrivateToggle: { type: Boolean, default: false },
	welcomePrivateText: { type: String, default: 'Have a great time here in **{server}**.' },
	welcomeRoleToggle: { type: Boolean, default: false },
	welcomeRoleGive: { type: Array, default: ['562297641879470082'] },
	welcomeGoodbyeToggle: { type: Boolean, default: false },
	welcomeGoodbyeText: { type: String, default: '**{user}** just left the server.' },
	// 0 = no announcement, 1 = reply, 2 = choosen channel
	LevelOption: { type: Number, default: 2 },
	LevelChannel: { type: String, default: '830431879458717727' },
	LevelMessage: { type: String, default: 'GG {user}, you have leveled up to {level}! Checkout our store in <#848972650608590848> to get your skin' },
	LevelIgnoreRoles: { type: Array, default: ['No-xp'] },
	LevelIgnoreChannel: { type: Array, default: ['No-xp'] },
	LevelMultiplier: { type: Number, default: 1 },
	LevelRoleRewards: { type: Array, default: ['gf'] },
	// Music plugin
	MusicDJ: { type: Boolean, default: true },
	MusicDJRole: { type: String, default: '854654002985566258' },
	// Music trivia plugin
	MusicTriviaPlugin: { type: Boolean, default: false },
	MusicTriviaGenres: { type: Array, default: ['pop'] },
	// logging plugin
	ModLog: { type: Boolean, default: true },
	ModLogEvents: { type: Array, default: ['CHANNELCREATE', 'CHANNELDELETE', 'CHANNELUPDATE', 'EMOJICREATE', 'EMOJIDELETE', 'EMOJIUPDATE',
	'GUILDBANADD', 'GUILDBANREMOVE', 'GUILDMEMBERADD', 'GUILDMEMBERREMOVE', 'GUILDMEMBERUPDATE', 'GUILDUPDATE', 'MESSAGEDELETE',
	'MESSAGEDELETEBULK', 'MESSAGEREACTIONADD', 'MESSAGEREACTIONREMOVE', 'MESSAGEREACTIONREMOVEALL', 'MESSAGEUPDATE', 'ROLECREATE', 'ROLEDELETE', 'ROLEUPDATE',
	'VOICESTATEUPDATE', 'REPORT', 'WARNING', 'TICKET', 'INVITECREATE', 'INVITEDELETE'] },
	ModLogChannel: { type: String, default: '854117644885819402' },
	ModLogIgnoreBot: { type: Boolean, default: true },
	// CommandCooldown
	CommandChannelToggle: { type: Boolean, default: false },
	CommandChannels: { type: Array, default: [11111111] },
	CommandCooldown: { type: Boolean, default: false },
	CommandCooldownSec: { type: Number, default: 2 },
	// Moderation plugin
	ModeratorRoles: { type: Array, default: ['owner'] },
	MutedRole: { type: String, default: '830080261038276649' },
	automoderation: Schema.Types.Mixed,
	// How many warnings till the user is kicked from server
	ModerationWarningCounter: { type: Number, default: 3 },
	// If moderation commands should be deleted after.
	ModerationClearToggle: { type: Boolean, default: true },
	// If every bot's should be affected by auto-mod
	ModerationIgnoreBotToggle: { type: Boolean, default: true },
	// For ticket command
	TicketToggle: { type: Boolean, default: true },
	TicketSupportRole: { type: String, default: '830536100111450153' },
	TicketCategory: { type: String, default: '830035790066614323' },
	// for report command
	ReportToggle: { type: Boolean, default: true },
	// Anti-raid plugin
	AntiRaidPlugin: { type: Boolean, default: true },
	// 0 = nothing, 1 = verify account by reacting to message, 2 = must complete CAPTCHA to join
	AntiRaidCompletion: { type: Number, default: 2 },
	AntiRaidChannelID: { type: String, default: '854362654260199444' },
	// Search PLugin
	// Misc
	DisabledCommands: { type: Array, default: ['IWannaHackYou'] },
	// Server stats plugin
	ServerStats: { type: Boolean, default: false },
	ServerStatsCate: { type: String, default: '00' },
	// bot
	ServerStatsBot: { type: Boolean, default: false },
	ServerStatsBotChannel: { type: String, default: '00' },
	// user
	ServerStatsUser: { type: Boolean, default: false },
	ServerStatsUserChannel: { type: String, default: '00' },
	// human
	ServerStatsHuman: { type: Boolean, default: false },
	ServerStatsHumanChannel: { type: String, default: '00' },
	Language: { type: String, default: 'en-US' },
	plugins: { type: Array, default: ['Fun', 'Giveaway', 'Guild', 'Image', 'Misc', 'Moderation', 'Music', 'NSFW', 'Plugins', 'Recording', 'Searcher', 'Ticket'] },
	version: { type: Number, default: '1.1' },
});

module.exports = model('Guild', guildSchema);
