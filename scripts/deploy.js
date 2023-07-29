async function main() {
  const KumortuliNFT = await ethers.getContractFactory("KumortuliNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const kumortuliNFT = await KumortuliNFT.deploy();
  console.log("Contract deployed to address:", kumortuliNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //Contract deploy address:0x580A920170CD8341e49ABFe1430dA426E8D4CbDf