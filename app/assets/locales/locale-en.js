/**
 * Created by necklace on 2016/12/27.
 */
export const en_US = {
    languages_zh: "简体中文",
    languages_en: "English",
    btn_ok: "OK",
    btn_cancel: "Cancel",
    message_title: "Tips",
    navigation_setting: "Setting",
    menu_index: "Home",
    menu_transaction: "Transaction",
    menu_transfer: "Transfer",
    menu_lastOperate: "Recent",
    menu_scan: "Scan",
    menu_createAccount: "Create",
    menu_settings: "Settings",
    settings_labLanguage: "Language",
    settings_labAPI: "API Server",
    settings_labFaucet: "Faucet",
    settings_labShowUnit: "Preferred unit of account",
    settings_labLockTime: "Wallet auto-lock time (seconds)",
    settings_labDisableChat: "Disable chat",
    settings_labShowWalletManage: "Wallet",
    settings_labDefaultSetting: "Reset settings",
    settings_add: "Add",
    settings_currentWallet: "Current Wallet",
    wallet_accountName: "Account name",
    wallet_accountName_ph: "Please enter account name",
    wallet_createErrMsg: "This is a premium name which is not supported by this faucet. Please enter a regular name containing least one dash, a number or no vowels.",
    wallet_createErrMsg2: 'This is a premium name which is more expensive than a name containing a dash (-) or a number.',
    wallet_createErrMsg3: "Please enter valid account name",
    wallet_createErrMsg4: "Password must be 8 characters or more",
    wallet_createErrMsg5: "Confirmation doesn't match Password",
    wallet_createErrMsg6: "Incorrect password",
    wallet_createCatch: "Failed to create wallet:{err}",
    wallet_mustBeLTM: "The fee paying account must be a lifetime member to perform that operation.",
    wallet_nameExist: "Account name has been used by others",
    wallet_passworkErrMsg: "The entered password is incorrect",
    wallet_nameNotFound: "Not found account",
    wallet_importKey: "Import the private key",
    wallet_importKey_imported: "This wallet has already been imported",
    wallet_backup: "Backup",
    wallet_backup_err: "Warning! You browser doesn't support some some file operations required to restore backup, we recommend you to use Chrome or Firefox browsers to restore your backup.",
    wallet_backup_download: "Download",
    wallet_backup_noBlob: "File saving is not supported",
    wallet_backup_invalidBackup: "Invalid backup to download conversion",
    wallet_importBackup: "Restore the backup",
    wallet_importBackup_invalidFormat: "Invalid Format",
    wallet_importBackup_reset: "Reset",
    wallet_importBackup_ok: "Confirm Restore",
    wallet_importBackup_success: "Successfully restored {name} wallet",
    wallet_importBackup_name: "Wallet Name",
    wallet_importBackup_name_ph: "Please enter new wallet name",
    wallet_modifyPassword: "Change your password",
    wallet_accountPrivateKey: "Private Key",
    wallet_accountPrivateKey_ph: "Please enter private Key",
    wallet_backupDescription: "Clicking on the button below will generate a backup file with a .bin extension. This file is encrypted with your wallet password, and contains all the private keys for your accounts. It can be used to restore your wallet, or move it to a different computer/browser.",
    wallet_importBackupDes: "Please select your backup file in the dialog below. This is completely safe as the file is not uploaded anywhere and never leaves your browser.",
    wallet_oldPassword: "Old password",
    wallet_oldPassword_ph: "Please enter old password",
    wallet_newPassword: "New password",
    wallet_newPassword_ph: "Please enter new password",
    wallet_confirmPassword: "Confirm Password",
    wallet_confirmPassword_ph: "Please enter confirm password",
    wallet_password: "Wallet Password",
    wallet_password_ph: "Please enter wallet password",
    wallet_selectFile: "Choose file",
    wallet_selectAccount: "Choose fee account",
    wallet_selectAccount_ph: "Select Account",
    wallet_confirmDelete: "Are you sure want to delete this wallet?",
    index_account: "Account",
    index_account_ph: "Please enter account name",
    index_order: "Order",
    index_collateral: "Collateral",
    index_marketValue: "Total",
    transaction_latest: "Price",
    transaction_volume: "Volume",
    transaction_pay: "Buy",
    transaction_sell: "Sell",
    transaction_orders: "Orders",
    transaction_history: "History",
    transaction_history_my:"My trades",
    transaction_history_all:"Market trades",
    transaction_history_block:"Block",
    transaction_history_blockTime:"Block Date",
    transaction_currentBalance: "Current {symbol} Balance",
    transaction_canBuy: "Can buy {symbol}",
    transaction_canSell: "Can Sell {symbol}",
    transaction_marketPrice: "市价单",
    transaction_limitPrice: "限价单",
    transaction_price: "Price {symbol}",
    transaction_amount: "Amount {symbol}",
    transaction_count: "Volume {symbol}",
    transaction_turnover: "Total {symbol}",
    transaction_chargefee: "Fee {symbol}",
    transaction_confirmSell: "Sell",
    transaction_confirmPay: "Buy",
    transaction_depthPrice: "Price",
    transaction_confirm: "Please confirm the transaction",
    transaction_confirm_accountName: "Account name",
    transaction_confirm_registerName: "Register",
    transaction_confirm_recommender: "Recommender",
    transaction_confirm_unlock: "Unlock",
    transaction_seller: "Seller",
    transaction_expiration: "Expiration",
    transaction_orderId: "Order Id",
    transaction_fundingAccount: "Funding account",
    transaction_deltaCollateral: "Collateral change",
    transaction_deltaDebt: "Debt change",
    transaction_no_listing: "Unlisted",
    transaction_white_listed: "Whitelisted",
    transaction_black_listed: "Blacklisted",
    transaction_white_and_black_listed: "Whitelisted and blacklisted",
    transaction_market_fee: "Market fee",
    transaction_max_market_fee: "Maximum market fee",
    transaction_publisher: "Publisher",
    transaction_new_url: "Website",
    transaction_claimed: "Total claimed",
    transaction_deposit_to: "Deposited to account",
    transaction_balance_id: "Balance ID",
    transaction_balance_owner: "Balance owner key",
    transaction_blinding_factor: "Blinding factor",
    transaction_outputs: "Outputs",
    transaction_inputs: "Inputs",
    transaction_broadcast_fail: "Failed to broadcast the transaction:",
    transaction_broadcast_success: "Transaction has been broadcast",
    transaction_waiting: "Waiting for confirmation..",
    transaction_broadcasting: "Broadcasting transaction..",
    transaction_received: "received",
    transaction_withdraw_permission_create: "Gave withdrawal permission for account",
    transaction_withdraw_permission_update: "Updated withdrawal permission for account",
    transaction_withdraw_permission_claim: "Claimed withdrawal permission for account",
    transaction_withdraw_permission_delete: "Deleted withdrawal permissions for account",
    transaction_global_parameters_update: "Updated global parameters",
    transaction_vesting_balance_create: "created vesting balance of",
    transaction_committee_member_create: "Created the committee member",
    transaction_committee_member_update: "Update committee member",
    transaction_asset_claim_fees: "claimed asset fees of {balance_amount} from {asset} fee pool",
    transaction_custom: "Created a custom operation",
    lastOperation_operation: "Operation",
    lastOperation_info: "Info",
    scan_defaultMsg: "The system does not support direct camera recognition，Place select camera or image",
    scan_selectImg: "Select image",
    scan_noCamera: "Not fount camera",
    scan_noQrcode: "Failed to identify，Please try again",
    scan_yesQrcode: "Successful identification",
    transfer_from: "From",
    transfer_from_ph: "Place enter from account name",
    transfer_to: "To",
    transfer_to_ph: "Place enter to-account name",
    transfer_member_unknown: "Unknown member",
    transfer_member_lifetime: "Lifetime member",
    transfer_member_basic: "Basic member",
    transfer_member_annual: "Annual subscriber",
    transfer_amount: "Amount",
    transfer_amount_ph: "Place enter amount",
    transfer_balance: "Balance",
    transfer_memo: "Memo",
    transfer_memo_ph: "Place enter memo",
    transfer_chargefee: "Fee",
    transfer_send: "Send",
    transfer_memoUnlock: "Unlock your wallet in order to see this memo",
    balance_assets: "Assets",
    balance_conversion: "Conversion",
    //trxTypes
    trxTypes_transfer: "Transfer",
    trxTypes_limit_order_create: "Place order",
    trxTypes_limit_order_cancel: "Cancel order",
    trxTypes_call_order_update: "Update margin",
    trxTypes_account_create: "Create account",
    trxTypes_account_update: "Update account",
    trxTypes_account_whitelist: "Account whitelist",
    trxTypes_account_upgrade: "Upgrade Account",
    trxTypes_account_transfer: "Transfer Account",
    trxTypes_asset_create: "Create asset",
    trxTypes_asset_update: "Update asset",
    trxTypes_asset_update_bitasset: "Update SmartCoin",
    trxTypes_asset_update_feed_producers: "Update asset feed producers",
    trxTypes_asset_issue: "Issue asset",
    trxTypes_asset_reserve: "Reserve asset",
    trxTypes_asset_fund_fee_pool: "Fund asset fee pool",
    trxTypes_asset_settle: "Asset settlement",
    trxTypes_asset_global_settle: "Global asset settlement",
    trxTypes_asset_publish_feed: "Publish feed",
    trxTypes_committee_member_create: "Create committee member",
    trxTypes_committee_member_update: "Update committee member",
    trxTypes_witness_create: "Create witness",
    trxTypes_witness_update: "Update witness",
    trxTypes_witness_withdraw_pay: "Witness pay withdrawal",
    trxTypes_proposal_create: "Create proposal",
    trxTypes_proposal_update: "Update proposal",
    trxTypes_proposal_delete: "Delete proposal",
    trxTypes_withdraw_permission_create: "Create withdrawal permission",
    trxTypes_withdraw_permission_update: "Update withdrawal permission",
    trxTypes_withdraw_permission_claim: "Claim withdrawal permission",
    trxTypes_withdraw_permission_delete: "Delete withdrawal permission",
    trxTypes_fill_order: "Fill order",
    trxTypes_committee_member_update_global_parameters: "Global parameters update",
    trxTypes_vesting_balance_create: "Create vesting balance",
    trxTypes_vesting_balance_withdraw: "Withdraw vesting balance",
    trxTypes_worker_create: "Create budget item",
    trxTypes_custom: "Custom",
    trxTypes_assert: "Assert operation",
    trxTypes_balance_claim: "Claim balance",
    trxTypes_override_transfer: "Override transfer",
    trxTypes_transfer_to_blind: "Transfer to blinded account",
    trxTypes_blind_transfer: "Blinded transfer",
    trxTypes_transfer_from_blind: "Transfer from blinded account",
    trxTypes_asset_claim_fees: "Claim asset fees",
    //exchanges
    exchange_price: "Price",
    exchange_sell: "Sell",
    exchange_buyMin: "Buy at least",
    //blocks
    block_feePayer: "Fee paying account",
    block_Publickey: "Public key",
    block_commonOptions: "Common Options",
    block_authorizingAccount: "Authorizing account",
    block_listedAccount: "Listed account",
    block_new_listing: "New listing",
    block_account_upgrade: "Account to upgrade",
    block_lifetime: "Upgrade to lifetime member",
    block_asset_update: "Asset to update",
    block_new_options: "New options",
    block_new_producers: "New feed producers",
    //accounts
    account_name: "Account Name",
    account_registrar: "Registrar",
    account_lifetimeReferrer: "Lifetime Referrer",
    account_votesProxy: "Proxy Voting Account",
    account_votesNoProxy: "No Proxy",
    account_numCommittee: "Desired Committee Members",
    account_num_witnesses: "Desired Witnesses",
    account_votes: "Votes",
    account_memoKey: "Memo Key",
    account_no_price: "Unknown",
    account_no_orders: "No open orders",
    account_totalBalance: "Total Balance",
    account_more: "see more",
    account_not_yours: "Not your account",
    account_keysview: "Keys view",
    account_owner_key: "Owner",
    account_active_key: "Active",
    account_memo_key: "Memo",
    account_wif_key: "WIF",
    //assets
    assets_issuer: "Issuer",
    assets_new_issuer: "New owner account",
    assets_symbol: "Symbol",
    assets_precision: "Precision",
    assets_max_supply: "Maximum supply",
    assets_description: "Description",
    assets_asset_issue: "Amount to issue",
    //markets
    markets_core_rate: "Core rate",
    //explorer
    explorer_accounts_title: "Accounts",
    explorer_accounts_filter: "Filter accounts",
    explorer_assets_title: "assets",
    explorer_maximum_short_squeeze_ratio: "Maximum short squeeze ratio (MSSR)",
    explorer_maintenance_collateral_ratio: "Maintenance collateral ratio (MCR)",
    explorer_settlement_price: "Settlement price",
    explorer_committee_members_title: "Committee members",
    explorer_witness: "Witness",
    explorer_op: "Operation",
    //proposal_create
    proposal_create_review_period: "Review period begin",
    proposal_create_expiration_time: "Expiration time",
    proposal_create_fee_paying_account: "Fee paying account",
    proposal_create_proposed_operations: "Proposed operations",
    //proposal
    proposal_update_active_approvals_to_add: "Active approvals to add",
    proposal_update_active_approvals_to_remove: "Active approvals to remove",
    proposal_update_owner_approvals_to_add: "Owner approvals to add",
    proposal_update_owner_approvals_to_remove: "Owner approvals to remove",
    proposal_update_key_approvals_to_add: "Key approvals to add",
    proposal_update_key_approvals_to_remove: "Key approvals to remove",
    //operation
    operation_pending: "pending {blocks} blocks",
    operation_no_recent: "No recent transactions",
    operation_reg_account: "(registrar) registered the account (new_account)",
    operation_transfer: "(from) sent (amount) to (to)",
    operation_proposal_create: "(account) created a proposed transaction",
    operation_proposal_update: "(account) updated a proposed transaction",
    operation_proposal_delete: "(account) deleted a proposed transaction",
    operation_fill_order: "(account) bought (received) at (price)",
    operation_vesting_balance_withdraw: "(account) withdrew vesting balance of (amount)",
    operation_balance_claim: "(account) claimed a balance of (amount)",
    operation_publish_feed: "(account) published feed price of (price)",
    operation_set_proxy: "(account) set (proxy) as their voting proxy",
    operation_update_account: "(account) updated their account data",
    operation_limit_order_sell: "(account) placed an order to sell (amount) at (price)",
    operation_limit_order_buy: "(account) placed an order to buy (amount) at (price)",
    operation_limit_order_cancel: "(account) cancelled order #{order}",
    operation_call_order_update: "(account) changed (debtSymbol) debt by (debt) and collateral by (collateral)",
    operation_asset_reserve: "(account) reserved (burnt) (amount)",
    operation_asset_issue: "(account) issued (amount) to (to)",
    operation_asset_fund_fee_pool: "(account) funded (asset) fee pool with (amount)",
    operation_asset_create: "(account) created the asset (asset)",
    operation_asset_update: "(account) updated the asset (asset)",
    operation_lifetime_upgrade_account: "(account) was upgraded to lifetime member",
    operation_annual_upgrade_account: "(account) was upgraded to annual member",
    operation_unlisted_by: "(lister) unlisted the account (listee)",
    operation_whitelisted_by: "(lister) whitelisted the account (listee)",
    operation_blacklisted_by: "(lister) blacklisted the account (listee)",
    operation_transfer_account: "(account) ownership transferred to (to)",
    operation_asset_update_feed_producers: "(account) updated the feed producers for the asset (asset)",
    operation_asset_settle: "(account) requested settlement of (amount)",
    operation_asset_global_settle: "(account) requested global settlement of (asset) at (price)",
    operation_witness_create: "(account) was upgraded to become a witness",
    operation_witness_update: "(account) update its witness info",
    operation_witness_pay: "Withdrew witness pay to account",
    operation_witness_receive: "Received witness from witness",
    operation_committee_member_update_global_parameters: "(account) updated the global committee parameters",
    operation_worker_create: "(account) created a worker proposal with daily pay of (pay)",
    operation_override_transfer: "(issuer) transferred (amount) from (from) to (to)"
}