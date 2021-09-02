module.exports = {
    reporters: ['default'],
    projects: [{
        displayName: 'atest',
        testMatch: ['<rootDir>/tests//?(*.)+(a.test).js', '<rootDir>/tests//?(*.)+(aa.test).js'],
        verbose: true,
    },
    {
        displayName: 'btest',
        testMatch: ['<rootDir>/tests//?(*.)+(b.test).js'],
        verbose: true,
    },
    ]
}