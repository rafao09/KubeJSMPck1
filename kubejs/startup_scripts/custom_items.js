onEvent('item.registry', event => {
    event.create('reinforcement_module')
    .maxStackSize(16)
    .glow(true)
    .fireResistant(true)
    .displayName('Upgrade Module')
})

onEvent('item.registry', event => {
    event.create('defense_module')
    .maxStackSize(16)
    .glow(true)
    .fireResistant(true)
    .displayName('Defense Module')
})

onEvent('item.registry', event => {
    event.create('ability_module')
    .maxStackSize(16)
    .glow(true)
    .fireResistant(true)
    .displayName('Ability Module')
})