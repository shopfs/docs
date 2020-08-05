---
id: docs
title: All Docs
sidebar_label: All Docs
---
# Shop FS

## Introduction

- The user adoption that we have seen accross Web3 has been phenomenal be it accross Blockchain/DLT's or Decentralized Storage (IPFS). In particular IPFS has been a revelation in the Web3 Space where users can store & access content in a decentralized way.

- The Challenge that IPFS has faced is user incentivization, though Filecoin has taken some big steps towards it, there is still a need of a good Interface where users and potentially buy and sell decentralized content.

- With the current infrastructure though you get incentivized with Filecoin but the user visibilty we feel is not that great for either party, so through HackFS we are introducing ShopFS a peer to peer decentralized marketplace where users can buy and sell decentralized content with a smooth and secure payment channel and a subscription model.


## Our Solution

- With Shop FS we aim to provide users a sustainable User Interface with an array of options to buy and sell decentralized content using [Fleek Space Daemon](https://blog.fleek.co/posts/daemon-release), in addition we have also come up with a Subscription Model powered by [EIP 1620](https://eips.ethereum.org/EIPS/eip-1620) to benefit the buyers and sellers even more. The dApp is also powered by [Graph Protocol](https://thegraph.com/) for better access to blockahin and IPFS data.


## Functionality


### Sell

- You can add any type of file on the platform and ask a price for private access of that file, currently the price limit is 20 DAI.

- Once you upload the file through our UI to to Fleek Space Daemon, we record the file details on the Ethereum Blockchain through a transaction and also your signature will be requested to ensure private access of your file.

### Buy

- Navigate to our file explorer, you will find details regarding each file and the $DAI Amount you need to pay to have private access of that file. 

- Once bought you can download the file any time once you provide your digital signature.

### Subscriptions

- This is perhaps the most interesting thing that we have introduced on our platform which caters to both the seller's and buyer's need.

- The subscription model allows a seller to create a subscription for a particular duration by virtue of which a buyer while streaming the payment can access all of that seller's files without buying them individually.

- As a seller this gives an opportunity to get more buyers interested as compared to selling a single file. The seller must set a price and a minmum duration of subscription. Later the seller can withdraw the current balance from any active subscription at any time. They can also disable subscriptions if they choose to.

- From a buyer's point of view, they will make a one-time payment based on the price set by the seller and they can cancel their subscription at any time and based on the payment rate of the [EIP 1620](https://eips.ethereum.org/EIPS/eip-1620) Stream, both sellers and buyers will get their share of the amount at that particular time as calculated by the contract.

