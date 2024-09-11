curl --request POST \
     --url https://eth-mainnet.g.alchemy.com/v2/arr2T-70UlYa-_TEGS93Q2_0vQ_act_c \
          --header 'accept: application/json' \
               --header 'content-type: application/json' \
                    --data '
                    {
                      "id": 1,
                        "jsonrpc": "2.0",
                          "method": "eth_getBlockByNumber",
                            "params": [
                            	  "finalized",
                                  	  false
                                        ]
                                        }
                                        '