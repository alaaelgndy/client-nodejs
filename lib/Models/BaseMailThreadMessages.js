/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of BaseMailThreadMessages
 */
class BaseMailThreadMessages extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.account_id = this.constructor.getValue(obj.account_id);
        this.user_id = this.constructor.getValue(obj.user_id);
        this.subject = this.constructor.getValue(obj.subject);
        this.snippet = this.constructor.getValue(obj.snippet);
        this.read_flag = this.constructor.getValue(obj.read_flag);
        this.mail_tracking_status = this.constructor.getValue(obj.mail_tracking_status);
        this.has_attachments_flag = this.constructor.getValue(obj.has_attachments_flag);
        this.has_inline_attachments_flag =
          this.constructor.getValue(obj.has_inline_attachments_flag);
        this.has_real_attachments_flag = this.constructor.getValue(obj.has_real_attachments_flag);
        this.deleted_flag = this.constructor.getValue(obj.deleted_flag);
        this.synced_flag = this.constructor.getValue(obj.synced_flag);
        this.smart_bcc_flag = this.constructor.getValue(obj.smart_bcc_flag);
        this.mail_link_tracking_enabled_flag =
          this.constructor.getValue(obj.mail_link_tracking_enabled_flag);
        this.write_flag = this.constructor.getValue(obj.write_flag);
        this.from = this.constructor.getValue(obj.from);
        this.to = this.constructor.getValue(obj.to);
        this.cc = this.constructor.getValue(obj.cc);
        this.bcc = this.constructor.getValue(obj.bcc);
        this.body_url = this.constructor.getValue(obj.body_url);
        this.mail_thread_id = this.constructor.getValue(obj.mail_thread_id);
        this.draft = this.constructor.getValue(obj.draft);
        this.has_body_flag = this.constructor.getValue(obj.has_body_flag);
        this.sent_flag = this.constructor.getValue(obj.sent_flag);
        this.sent_from_pipedrive_flag = this.constructor.getValue(obj.sent_from_pipedrive_flag);
        this.message_time = this.constructor.getValue(obj.message_time);
        this.add_time = this.constructor.getValue(obj.add_time);
        this.update_time = this.constructor.getValue(obj.update_time);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'account_id', realName: 'account_id' },
            { name: 'user_id', realName: 'user_id' },
            { name: 'subject', realName: 'subject' },
            { name: 'snippet', realName: 'snippet' },
            { name: 'read_flag', realName: 'read_flag' },
            { name: 'mail_tracking_status', realName: 'mail_tracking_status' },
            { name: 'has_attachments_flag', realName: 'has_attachments_flag' },
            { name: 'has_inline_attachments_flag', realName: 'has_inline_attachments_flag' },
            { name: 'has_real_attachments_flag', realName: 'has_real_attachments_flag' },
            { name: 'deleted_flag', realName: 'deleted_flag' },
            { name: 'synced_flag', realName: 'synced_flag' },
            { name: 'smart_bcc_flag', realName: 'smart_bcc_flag' },
            {
                name: 'mail_link_tracking_enabled_flag',
                realName: 'mail_link_tracking_enabled_flag',
            },
            { name: 'write_flag', realName: 'write_flag' },
            { name: 'from', realName: 'from', array: true, type: 'MailThreadParticipant' },
            { name: 'to', realName: 'to', array: true, type: 'MailThreadParticipant' },
            { name: 'cc', realName: 'cc', array: true, type: 'MailThreadParticipant' },
            { name: 'bcc', realName: 'bcc', array: true, type: 'MailThreadParticipant' },
            { name: 'body_url', realName: 'body_url' },
            { name: 'mail_thread_id', realName: 'mail_thread_id' },
            { name: 'draft', realName: 'draft' },
            { name: 'has_body_flag', realName: 'has_body_flag' },
            { name: 'sent_flag', realName: 'sent_flag' },
            { name: 'sent_from_pipedrive_flag', realName: 'sent_from_pipedrive_flag' },
            {
                name: 'message_time',
                realName: 'message_time',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'add_time', realName: 'add_time', isDateTime: true, dateTimeValue: 'rfc3339' },
            {
                name: 'update_time',
                realName: 'update_time',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = BaseMailThreadMessages;
