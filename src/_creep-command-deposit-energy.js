function commandHarvestEnergy() {

  if (this.carry.energy) {
    var target = this.room.getSpawn();

    if (this.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      this.moveTo(target);
    }
    // TODO: if someone is targeting me move to the target instead
    return 'SAVE';
  }
  return 'DELETE';
}

module.exports = commandHarvestEnergy;
