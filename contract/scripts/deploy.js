async function main() {
    const ChimpsPimps = await ethers.getContractFactory("ChimpsPimps")
  
    // Start deployment, returning a promise that resolves to a contract object
    const chimpsPimps = await ChimpsPimps.deploy("ipfs://bafybeiainhgrg3skw323jxph4nkmnfmr2pn7fvicpnk56ay6romk2xpn7a/")
    await chimpsPimps.deployed()
    console.log("Contract deployed to address:", chimpsPimps.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  