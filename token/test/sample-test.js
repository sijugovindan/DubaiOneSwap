const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DubaiOne Token", function () {
  it("Should return owner of token", async function () {
    const [owner]=await ethers.getSigners();
    const DubaiOneToken = await ethers.getContractFactory("DubaiOneToken");
    const dot = await DubaiOneToken.deploy();
    await dot.deployed();
    const owneraddress= await dot.owner();
    expect(owneraddress).to.equal(owner.address);
  });
});