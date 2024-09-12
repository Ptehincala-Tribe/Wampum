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
                                        'const url = "https://eth-mainnet.g.alchemy.com/v2/arr2T-70UlYa-_TEGS93Q2_0vQ_act_c";
                                        const headers = {
                                          Accept: "application/json",
                                            "Content-Type": "application/json",
                                            };

                                            const body = JSON.stringify({
                                              id: 1,
                                                jsonrpc: "2.0",
                                                  method: "eth_getBlockByNumber",
                                                    params: ["finalized", false],
                                                    });

                                                    fetch(url, {
                                                      method: "POST",
                                                        headers: headers,
                                                          body: body,
                                                          })
                                                            .then((response) => response.json())














