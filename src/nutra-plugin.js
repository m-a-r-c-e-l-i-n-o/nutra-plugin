const framework = (events, system, opts) => {
    return 'framework'
}

const preprocessor = (events, system, opts) => {
    return 'preprocessor'
}

const reporter = (events, system, opts) => {
    return 'reporter'
}

const moduleloader = (events, system, opts) => {
    return 'moduleloader'
}

export { framework, preprocessor, reporter, moduleloader }
