/**
 * LANE SOCIAL CO — Audit Intake Webhook
 *
 * HOW TO SET UP:
 * 1. Open (or create) the Google Sheet you want responses in
 * 2. Click Extensions → Apps Script
 * 3. Delete anything in the editor and paste this entire script
 * 4. Click the blue "Deploy" button → "New deployment"
 * 5. Click the gear icon next to "Select type" → choose "Web app"
 * 6. Set "Execute as" to "Me"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click "Deploy"
 * 9. Copy the URL it gives you — that's your webhook URL
 * 10. Paste that URL into audit-intake.html (replacing the placeholder)
 *
 * IMPORTANT: If you edit this script later, you need to create a
 * NEW deployment (not update the old one) for changes to take effect.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    /* ── Define column headers (first run creates them) ── */
    var headers = [
      'timestamp',
      'full_name',
      'business_name',
      'website_url',
      'email',
      'platforms',
      'handle_instagram',
      'handle_tiktok',
      'handle_facebook',
      'handle_linkedin',
      'handle_youtube',
      'handle_pinterest',
      'handle_twitter',
      'business_description',
      'ideal_customer',
      'top_product',
      'customer_journey',
      'primary_goal',
      'biggest_frustration',
      'active_time_instagram',
      'post_freq_instagram',
      'followers_instagram',
      'tracks_analytics_instagram',
      'engagement_instagram',
      'active_time_tiktok',
      'post_freq_tiktok',
      'followers_tiktok',
      'tracks_analytics_tiktok',
      'engagement_tiktok',
      'active_time_facebook',
      'post_freq_facebook',
      'followers_facebook',
      'tracks_analytics_facebook',
      'engagement_facebook',
      'active_time_linkedin',
      'post_freq_linkedin',
      'followers_linkedin',
      'tracks_analytics_linkedin',
      'engagement_linkedin',
      'active_time_youtube',
      'post_freq_youtube',
      'followers_youtube',
      'tracks_analytics_youtube',
      'engagement_youtube',
      'active_time_pinterest',
      'post_freq_pinterest',
      'followers_pinterest',
      'tracks_analytics_pinterest',
      'engagement_pinterest',
      'active_time_twitter',
      'post_freq_twitter',
      'followers_twitter',
      'tracks_analytics_twitter',
      'engagement_twitter',
      'content_style',
      'has_brand_voice',
      'sample_posts',
      'competitors',
      'competitor_strengths',
      'tried_before',
      'anything_else',
      'source'
    ];

    /* ── Create header row if sheet is empty ── */
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);

      /* Bold + freeze the header row */
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    /* ── Build the row from the payload ── */
    var row = headers.map(function(key) {
      var val = data[key];
      if (val === undefined || val === null) return '';
      if (Array.isArray(val)) return val.join(', ');
      return val;
    });

    sheet.appendRow(row);

    /* ── Return success (the form doesn't check this, but good practice) ── */
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/* Optional: test GET requests show a friendly message */
function doGet() {
  return ContentService.createTextOutput(
    'Lane Social Co Audit Intake webhook is active. Use POST to submit data.'
  );
}
