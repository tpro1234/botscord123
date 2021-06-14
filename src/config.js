const config = {
	ownerID: ['367482785285537792'],
	token: 'ODUzNzY2NTEwMjA0Mjg5MDY0.YMaKBg.q5ZTA-yXYxgOSAVgbkorC0fe-jA',
	botClient: 'kP7KN3mm9TFaQAhz2UkkISeS2toU_t4o',
	// replace BOTID with the bot's ID
	inviteLink: 'https://discord.com/api/oauth2/authorize?client_id=853766510204289064&permissions=0&scope=bot',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://dev.twitch.tv/console/apps
		twitch: {
			clientID: '',
			clientSecret: '',
		},
		// https://fortnitetracker.com/site-api
		fortnite: 'fortniteAPI-Key',
		// https://api.ksoft.si/
		ksoft: 'ksoftAPI-Key',
		// https://steamcommunity.com/dev
		steam: 'steamAPI-Key',
		// https://developer.spotify.com/documentation/web-api/
		spotify: {
			iD: 'spotify-ID',
			secret: 'spotify-secret',
		},
		// Your Ubisoft email and password (You don't need to enable anything)
		rainbow: {
			email: 'email',
			password: 'password',
		},
		// https://genius.com/developers
		genuis: 'genuisAPI-KEY',
		// https://api.amethyste.moe/
		amethyste: 'amethysteAPI-Key',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'Bot\'s dashboard',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/JFAzwz3E6E',
		// Your support's server ID
		GuildID: '830035790066614322',
		// This for using the suggestion command on your server
		ModRole: '830040173068419082',
		// What channel to post the suggestions
		SuggestionChannel: '830035790066614328',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '830041375310610453',
	},
	// THESE SETTINGS ARE FOR DMS ONLY
	defaultSettings: {
		// default settings
		prefix: '!',
		Language: 'en-US',
		plugins: ['Fun', 'Image', 'Misc', 'NSFW', 'Recording', 'Searcher'],
	},
	// URL to mongodb
	MongoDBURl: 'mongodb+srv://tpro123:talsgamer123@cluster0.ifshf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	// This will spam your console if you enable this but will help with bug fixing
	debug: false,
};

module.exports = config;
