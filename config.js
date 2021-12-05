module.exports = {
    app: {
        px: '-',
        token: ('OTE1OTYzODE4NzY3Njk5OTY5.YajPyA.1TpF-TvL9PD9uT0R5ScT4U0YJqY'),
        playing: 'pancakes are yummy'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
